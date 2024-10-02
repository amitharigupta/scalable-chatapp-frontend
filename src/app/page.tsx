import Image from "next/image";
import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import Footer from "@/components/base/Footer";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroup } from "@/fetch/groupFetch";

export default async function Home() {
  const session:CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroup(session?.user?.token!);

  console.log("The groups are : ", groups);
  return (
    <div className="min-h-screen flex flex-col ">
       {/* Header */}
       <Navbar user={session?.user} /> 
       {/* user={session?.user ?? null} /> */}
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
