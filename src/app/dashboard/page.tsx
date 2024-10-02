import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/components/groupchat/CreateChat";
import { fetchChatGroup } from "@/fetch/groupFetch";

const Dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  // console.log(session)

  const groups: Array<GroupChatType> | [] = await fetchChatGroup(session?.user?.token!);

  console.log("The groups are : ", groups);

  return (
    <div>
      {/* <p>{JSON.stringify(session)}</p> */}
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="container">
        <div className="flex justify-end mt-10">
          <CreateChat user={session?.user!} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
