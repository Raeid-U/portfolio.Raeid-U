export default function ContactBanner() {
  return (
    <div className="bg-foreground font-jetbrains">
      <p className="flex lg:hidden">&nbsp;</p>
      <div className="w-full h-1/5 bg-background overflow-hidden flex items-center relative">
        <div className="flex space-x-10 py-8 px-8 text-offwhite text-lg">
          <hr className="bg-offwhite h-auto w-1" />
          <span>contact</span>
        </div>
      </div>
    </div>
  );
}
