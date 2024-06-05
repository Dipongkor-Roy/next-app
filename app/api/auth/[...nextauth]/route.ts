import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions={
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!, //exclamatory for storngly sure that client is there
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }