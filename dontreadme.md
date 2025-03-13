### This is how I setup nextAuth
1. /app/api/auth/[...auth]/route.ts: this is where we  have to export the handler as route handler(as GET and as POST)
2. /app/api/auth/[...auth]/options.ts: this is from where we create auth options, pass the options, providers
3. /app/utils/page.ts: this is where we define pages, e.g where sign up, login and other pages are
