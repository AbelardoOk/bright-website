import { Carrossel } from "@/components/Carrossel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Inicio site */}
      <section className="flex h-[93vh] flex-row items-center justify-around gap-4 bg-white">
        <div className="text-neutral-800">
          <h1 className="text-pretty font-alt text-4xl">
            NUNCA É TARDE <br /> PARA{" "}
            <span className="text-[#4e47c6]">EVOLUIR</span>
          </h1>
          <p className="font-sans">
            Nós da <span className="font-hago text-[#4e47c6]">bright</span>{" "}
            estamos aqui para iluminar seu caminho!
          </p>
        </div>
        <div className="w-[50vw]">
          <Carrossel />
        </div>
      </section>

      <p className="absolute ml-[20vw] mt-[-14vh] rotate-2 rounded-lg bg-[url(/pattern.png)] bg-contain bg-repeat px-28 py-14 text-center font-sans text-3xl font-bold text-[#f7f7f7] shadow-lg">
        Cuidamos de tudo para que você <br /> tenha uma experiência incrível{" "}
        <br /> com seu website.
      </p>

      <section className="flex flex-col items-center gap-4 bg-[#07143f] pb-[15vh] pt-[35vh]">
        <div className="flex flex-row gap-4 [mask-image:_linear-gradient(to_top,transparent_0,_black_96px,_black_calc(100%-128px))]">
          <Image
            className="h-[50vh] w-fit -rotate-3"
            src={"/img1.png"}
            alt={"..."}
            width={2000}
            height={2000}
          />
          <Image
            className="h-[50vh] w-fit rotate-3"
            src={"/img3.png"}
            alt={"..."}
            width={2000}
            height={2000}
          />
        </div>
        <p className="text-center font-sans text-3xl font-bold">
          As melhores opções <br /> para seu website
        </p>
        <a
          href={"https://wa.me/+5567998007607"}
          target="_blank"
          className="rounded-md border-2 border-[#f7f7f738] bg-gradient-to-bl from-[#4e47c6] to-[#3e3b9e] px-8 py-2 font-sans text-xs font-bold text-[#f7f7f7]"
        >
          Fazer orçamento
        </a>
      </section>
    </main>
  );
}
