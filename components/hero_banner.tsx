export default function HeroBanner() {
  return (
    <div className="w-full h-1/5 bg-background overflow-hidden flex items-center relative">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex space-x-10 py-8 text-offwhite text-lg font-mono"
          >
            <span>C++</span>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Typescript</span>
            <span>C</span>
            <span>SQL</span>
            <span>Shiny</span>
            <span>R</span>
            <span>TailwindCSS</span>
          </div>
        ))}
      </div>
    </div>
  );
}
