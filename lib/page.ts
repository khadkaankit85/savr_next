import { PagesOptions } from "next-auth";

const pages: PagesOptions = {
  signIn: "/auth/login",
  signOut: "/auth/login",
  error: "/auth/error",
  verifyRequest: "auth/verify-request",
  newUser: "/auth/new-user",
};
export default pages;
