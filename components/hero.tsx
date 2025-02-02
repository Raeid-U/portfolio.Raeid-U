import Image from "next/image";
import Infobox from "./infobox";

export default function Hero() {
  return (
    <section className="flex w-full h-screen">
      <div className="w-1/2 h-full bg-foreground flex items-center justify-center text-offwhite">
        <div className="w-3/4 flex flex-col items-center text-center mt-16">
          {/* move to sep. component (self-typing) */}
          <h2 className="text-xl md:text-2xl font-jetbrains">
            <span className="text-offwhite">p</span>
            <span className="text-highlight">r</span>
            <span className="text-offwhite">ogr</span>
            <span className="text-highlight">a</span>
            <span className="text-offwhite">mming</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-jetbrains">
            <span className="text-offwhite">r</span>
            <span className="text-highlight">e</span>
            <span className="text-offwhite">-imag</span>
            <span className="text-highlight">i</span>
            <span className="text-offwhite">ne</span>
            <span className="text-highlight">d</span>
          </h2>

          <Infobox />
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
