import { withAuth } from "next-auth/middleware";
import pages from "./lib/page";
/*
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  },
  */
export default withAuth({ pages });
export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };
