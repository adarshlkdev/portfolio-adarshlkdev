import { Loader } from "lucide-react";

export default function Loading(){
    return (
    <div className="h-screen w-full bg-black bg-dot-white/[0.4] relative flex items-center justify-center flex-col gap-4">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-between bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
         <span className="text-red-600 ml-20">Loading</span>
         <p className="text-blue">Please wait...</p>
        </p>
        <Loader className="animate-spin" color="white" />
    </div>
  );
}