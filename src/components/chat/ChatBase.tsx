"use client";

import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "@/components/ui/button";

const ChatBase = () => {
  let socket = useMemo(() => {
    const socket = getSocket();

    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("Received message", data);
    });
    return () => {
      socket.close();
    };
  }, []);

  const handleClick = () => {
    console.log("Handle Button clicked");
    socket.emit("message", { name: "Amit", id: uuidV4() });
  };

  return (
    <div>
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  );
};

export default ChatBase;
