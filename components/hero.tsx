import Image from "next/image";
import HeroBox from "./hero_box";
import Reimagined from "./reimagined";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="flex flex-col justify-center items-center bg-foreground text-offwhite p-8 w-full md:w-1/2">
        <div className="w-5/6 lg:w-3/4 flex flex-col items-center text-center space-y-6">
          <Reimagined />
          <HeroBox />
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
        <Image
          src="/hero_sat.jpg"
          alt="Hero Image"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
