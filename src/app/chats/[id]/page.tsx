import ChatBase from "@/components/chat/ChatBase";
import React from "react";

const Chat = ({ params }: { params: { id: string } }) => {
  console.log(`The group id is ${params.id}`);
  return (
    <div>
      <h1>Hello I am Chat</h1>
      <ChatBase groupId={params.id} />
    </div>
  );
};

export default Chat;
