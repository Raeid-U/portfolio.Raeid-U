import Image from "next/image";
import AboutHeader from "./about_header";
import AboutBox from "./about_box";

export default function About() {
  return (
    <section className="flex w-full h-screen">
      <div className="w-1/2 h-full relative">
        <Image
          src="/about_sat.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="scale-down"
          className="w-full h-full p-4 bg-foreground"
        />
      </div>
      <div className="w-1/2 h-full bg-foreground flex items-center justify-center text-offwhite">
        <div className="w-3/4 flex flex-col items-center text-center mt-16">
          <AboutHeader />

          <AboutBox />
        </div>
      </div>
    </section>
  );
}
