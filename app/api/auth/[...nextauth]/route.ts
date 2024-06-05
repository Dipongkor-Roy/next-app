import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!, //exclamatory for storngly sure that client is there
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ]
})

export { handler as GET, handler as POST }