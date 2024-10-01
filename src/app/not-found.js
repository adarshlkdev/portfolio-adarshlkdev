"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound(){
    return (
    <div className="h-screen w-full bg-black bg-dot-white/[0.4] relative flex items-center justify-center flex-col gap-4">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-between bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 animate-bounce">
       <span className="text-red-600 ml-20">Error 404</span>
       <p className="text-blue">Page not found</p>
      </p>
      <Button className='bg-white text-black hover:bg-white hover:text-black'>
        <Link href="/">
          Go back home
        </Link>
      </Button>
    </div>
  );
}