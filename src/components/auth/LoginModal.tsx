"use client";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { signIn } from "next-auth/react"

export default function LoginModal() {

  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild >
        <Button>Getting Start</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Chat APP</DialogTitle>
          <DialogDescription>
            Quickchat makes it effortless to create secure create secure chat links and start conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <Button variant={"outline"} onClick={handleLogin}>
            <Image src="/images/google.png" className={"mr-4"} width={25} alt="google_logo" height={"500"} /> Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
