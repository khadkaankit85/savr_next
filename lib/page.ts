import { PagesOptions } from "next-auth";

const pages: PagesOptions = {
  signIn: "/signup",
  signOut: "/",
  error: "/auth/error",
  verifyRequest: "auth/verify-request",
  newUser: "/auth/new-user",
};
export default pages;
