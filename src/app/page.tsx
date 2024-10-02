import { Carrossel } from "@/components/Carrossel";

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

      <section className="h-[100vh] bg-[#07143f]">
        <p>teste</p>
      </section>
    </main>
  );
}
