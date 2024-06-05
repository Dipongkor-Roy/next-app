export {default} from "next-auth/middleware"

export const config={
    //*:zero or many
    //+:one or many
    //?:zero or one
    matcher:['/users/:id*']
}