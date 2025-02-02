import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 mt-8 flex items-center justify-between drop-shadow-2xl w-3/4 bg-background px-8 py-4 rounded-full">
      <div className="flex flex-1 justify-start space-x-40 text-offwhite text-md font-mono tracking-wider">
        <a
          href="#"
          className="hover:tracking-widest transition-all duration-700"
        >
          home
        </a>
        <a
          href="#"
          className="hover:tracking-widest transition-all duration-700"
        >
          about
        </a>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-background rounded-full p-2 shadow-lg">
        <Image src="/center.png" alt="Center Icon" width={75} height={75} />
      </div>

      <div className="flex flex-1 justify-end space-x-40 text-offwhite text-md font-mono tracking-wider">
        <a
          href="#"
          className="hover:tracking-widest transition-all duration-700"
        >
          projects
        </a>
        <a
          href="#"
          className="hover:tracking-widest transition-all duration-700"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
