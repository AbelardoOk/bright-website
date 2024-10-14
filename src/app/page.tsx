import { Carrossel } from "@/components/Carrossel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Inicio site */}
      <section className="flex h-[93vh] flex-row items-center justify-around gap-4 bg-[#f7f7f7]">
        <div className="text-[#07143f]">
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

      <section className="grid h-[100vh] grid-cols-3 items-center gap-8 bg-[#07143f] px-[6vw] py-[10vh]">
        {/* Portifólio */}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 justify-items-center gap-5 rounded-lg bg-[#132b65] p-6">
          <p className="self-end text-pretty pb-4 font-alt text-3xl">
            ALGUNS PROJETOS :)
          </p>
          <Image
            className="h-fit w-[40vw] rounded-xl"
            src={"/site4.png"}
            alt="..."
            width={1440}
            height={768}
          />
          <Image
            className="h-fit w-[40vw] rounded-xl"
            src={"/site2.png"}
            alt="..."
            width={1440}
            height={768}
          />
          <Image
            className="h-fit w-[40vw] rounded-xl"
            src={"/site3.png"}
            alt="..."
            width={1440}
            height={768}
          />
        </div>

        {/* Informações extras */}
        <div className="grid grid-rows-3 gap-8">
          <p className="row-span-1 rounded-lg bg-[url(/pattern.png)] bg-contain bg-repeat px-6 py-4 text-center font-sans text-xl font-bold text-[#f7f7f7] shadow-lg">
            Cuidamos de tudo para que você tenha uma experiência incrível com o
            seu website.
          </p>
          <div className="row-span-2 overflow-hidden rounded-lg bg-[#132b65]">
            <div className="flex flex-row items-center gap-6 bg-[#01040a] px-6 py-4">
              <Image
                className="h-[15vh] w-fit rounded-xl"
                src={"/profile.jpeg"}
                alt="..."
                width={1080}
                height={1080}
              />
              <div>
                <h3 className="font-hago text-xl font-bold">
                  Abelardo Palácios
                </h3>
                <h4 className="text-md font-light opacity-50">Desenvolvedor</h4>
              </div>
            </div>
            <p className="px-6 py-4 text-sm font-light opacity-80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              repellendus explicabo ullam animi dolore? Est deserunt nulla ex in
              itaque?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
