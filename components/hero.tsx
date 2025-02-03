import HeroBox from "./hero_box";
import Reimagined from "./reimagined";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-foreground block"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full block">
        <img
          src="/hero_sat.JPG"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 w-3/4 lg:w-1/2">
        <Reimagined />
        <HeroBox />
      </div>
    </div>
  );
}
