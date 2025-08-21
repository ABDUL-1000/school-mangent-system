
import { Menu } from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     <div className="flex h-screen"> 
    
      {/* left sidebar */}
      <div className="w-[10%] md:w-[10%] lg:[14%] mr-4 ">
      <Link href="/" className="flex items-center lg:justify-start gap-2">
        <Image src="/Frame 30 (2).png" width={20} height={20} alt="touba school"></Image>
        <span className="hidden md:bock lg:block  text-">Touba School</span>
      </Link>
        
        <Menu />
        <div className=" justify-start gap-2">
         
          
        </div>
 
      </div>
      {/* right side */}
      <div className="w-[90%] md:w-[90%] lg:[86%] bg-[#F7F8F9] overflow-scroll flex flex-col">
      {/* Navbar */}
      <Navbar/>
        {children}
      </div>

     </div>
    </html>
  );
}
