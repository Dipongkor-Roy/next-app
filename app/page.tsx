import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
interface Props {
  params: { id: number };
}
const userPage = async ({ params: { id } }: Props) => {
  const sess=await getServerSession(authOptions); //getServerSession use for get session in server NB: skipped await
  return (
    <div className="m-3">
      <h2 className="text-center">Welcome To Next App {sess && <span>{sess.user!.name}</span>
    }</h2>
      <div className="text-center mt-3"></div>
    </div>
  );
};

export default userPage;
