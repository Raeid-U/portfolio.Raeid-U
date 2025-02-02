import Image from "next/image";
import HeroBox from "./hero_box";
import Reimagined from "./reimagined";

export default function Hero() {
  return (
    <section className="flex w-full h-screen">
      <div className="w-1/2 h-full bg-foreground flex items-center justify-center text-offwhite">
        <div className="w-3/4 flex flex-col items-center text-center mt-16">
          <Reimagined />

          <HeroBox />
        </div>
      </div>

      <div className="w-1/2 h-full relative">
        <Image
          src="/hero_sat.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
