import AboutHeader from "./about_header";
import AboutBox from "./about_box";

export default function About() {
  return (
    <div className="relative w-full min-h-screen flex flex-col align-middle content-center items-center justify-center">
      <div className="absolute top-0 left-0 w-1/2 h-full hidden md:block">
        <img
          src="/about_sat.JPG"
          alt="About Image"
          className="object-cover object-middle w-full h-full"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-foreground hidden md:block"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 w-5/6 lg:w-3/4 text-offwhite">
        <AboutHeader />
        <AboutBox />
      </div>

      <div className="relative items-center w-full md:hidden">
        <img
          src="/about_sat.JPG"
          alt="About Image"
          className="object-scale-down w-full h-full p-8"
        />
      </div>
    </div>
  );
}
