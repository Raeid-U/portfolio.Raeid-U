export default function HeroBanner() {
  return (
    <div className="w-full h-1/5 font-jetbrains bg-background overflow-hidden flex items-center relative">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex space-x-10 py-8 text-offwhite text-lg">
            <span>C++</span>
            <span>Postgres</span>
            <span>Express.js</span>
            <span>Linux</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Typescript</span>
            <span>TailwindCSS</span>
            <span>C</span>
            <span>SQL</span>
            <span>Rust</span>
            <span>docker</span>
            <span>local-AI</span>
          </div>
        ))}
      </div>
    </div>
  );
}
