import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user.model";
import { cookies } from "next/headers";
import connectToMango from "@/lib/mongodb";
import { generateRandomPassword } from "@/lib/utils";
import { randomUUID } from "crypto";

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    //  this is login + sign up function, how? see the callback for signIn below:)
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    /* this is for login with text input option where users type their username and password
     * this route is called as signIn("textfield-google-login") where signIn is imported from  next-auth/react
     * fields should be email and password
     */
    CredentialsProvider({
      id: "textfield-google-login",
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Secret Password",
        },
      },
      async authorize(credentials) {
        // #TODO: this is where we need to retrive the users data to verify their credentials
        // docs at: https://next-auth.js.org/providers/credentials
        if (!credentials || !credentials.password || !credentials.email) {
          throw new Error("missing input field/s");
        } else {
          await connectToMango()
          //get the user from the database and return the user:)
          const user = await User.findOne({ email: credentials.email });
          if (
            user &&
            user.email === credentials.email &&
            user.password === credentials.password
          )
            return user;
          else {
            return null;
          }
        }
      },
    }),
    /* this option is for users to signup with user name, email and password
     */
    CredentialsProvider({
      id: "textfield-google-signup",
      type: "credentials",
      name: "Credentials",
      credentials: {
        password2: {
          label: "Password2",
          type: "password",
          placeholder: "confirm your password",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Secret Password",
        },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          !credentials.password ||
          !credentials.email ||
          !credentials.password2
        ) {
          throw new Error("missing input field/s");
        }

        await connectToMango()

        //if the email is in use
        const existingUser = await User.findOne({ email: credentials.email });
        if (existingUser) {
          throw new Error("User already exists. Please log in instead.");
        }

        //else
        const newUser = await User.create({ email: credentials.email });
        return newUser;
      },
    }),
    //this is where we handle the login button with google
    CredentialsProvider({
      id: "handle-google-login-button",
      type: "credentials",
      name: "Credentials",
      credentials: {
        password2: {
          label: "Password2",
          type: "password",
          placeholder: "confirm your password",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Secret Password",
        },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          !credentials.password ||
          !credentials.email ||
          !credentials.password2
        ) {
          throw new Error("missing input field/s");
        }


        await connectToMango()
        //if the email is in use
        const existingUser = await User.findOne({ email: credentials.email });
        if (existingUser) {
          throw new Error("User already exists. Please log in instead.");
        }

        //else
        const newUser = await User.insertOne({ email: credentials.email });
        return newUser;
      },
    }),
  ],
  callbacks: {
    //before calling the function, client must set a cookie with user-signup-intent = login or singup 
    async signIn({ user, account, profile, email, credentials }) {

      await connectToMango()
      if (account?.provider === "google") {
        try {
          // Retrieve the user's intention (login or signup) from the cookie
          const userIntention = (await cookies()).get("user-signup-intent")?.value;

          (await cookies()).set("user-signup-intent", "", { maxAge: 0, path: "/" })

          // Check if the user exists in the database
          const existingUser = await User.findOne({ email: user.email });

          if (userIntention === "login") {
            // If the user is trying to login, check if they exist
            if (!existingUser) {
              return false; // User does not exist, deny login
            }
            return true
          } else if (userIntention === "signup") {
            // If the user is trying to sign up, create a new user if they don't exist

            if (!existingUser) {
              await User.create({
                fullName: profile?.name || "New User",
                username: user?.email?.split("@")[0],
                password: generateRandomPassword(),
                email: user.email,
                additionalInfo: {
                  googleId: account.providerAccountId,
                  role: "user", // Default role
                  token: {
                    //TODO send the token in email for verification 
                    value: randomUUID(),
                    createdAt: new Date(),
                    requestCount: 0,
                  },
                },
              });
            }
            return true
          } else {
            // If the intention is unclear, deny the sign-in
            return false;
          }
        } catch (error) {
          console.error("Error during sign-in:", error);
          return false; // Deny sign-in if an error occurs
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id,
          token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user = { name: token.name }
      }
      return session;
    }
    ,
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? baseUrl : baseUrl;
    },
  },
};
