import { PagesOptions } from "next-auth";

const pages: Partial<PagesOptions> = {
  signIn: "/signup",
  signOut: "/",
  error: "/signup",
  verifyRequest: "auth/verify-request",
  newUser: "/auth/new-user",
};
export default pages;
