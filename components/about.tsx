import AboutHeader from "./about_header";
import AboutBox from "./about_box";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto bg-foreground p-4">
        <img
          src="/about_sat.jpg"
          alt="About Image"
          className="object-scale-down w-full h-full p-8"
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-foreground text-offwhite p-8 w-full md:w-1/2">
        <div className="w-5/6 lg:w-3/4 flex flex-col items-center text-center space-y-6">
          <AboutHeader />
          <AboutBox />
        </div>
      </div>
    </div>
  );
}
