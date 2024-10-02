import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-[7vh] w-full flex-row items-center justify-center gap-8 bg-white p-2 font-hago text-base text-neutral-800">
      <a className="transition-all hover:text-lg hover:text-[#4e47c6]" href="">
        Início
      </a>
      <Image
        className="h-full w-fit animate-pulse"
        src={"/icon.png"}
        width={1080}
        height={1080}
        alt="Logo"
      />
      <a className="transition-all hover:text-lg hover:text-[#4e47c6]" href="">
        Contate
      </a>
    </header>
  );
}
