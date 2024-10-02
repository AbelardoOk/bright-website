import Image from "next/image";

export function Carrossel() {
  return (
    <div className="inline-flex h-full w-full flex-nowrap overflow-hidden rounded-lg [&_img]:h-[76vh] [&_img]:w-fit">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2">
        <li>
          <Image src={"/site1.png"} alt="site1" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site3.png"} alt="site3" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site2.png"} alt="site2" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site4.png"} alt="site4" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site5.png"} alt="site5" width={1440} height={820} />
        </li>
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        <li>
          <Image src={"/site1.png"} alt="site1" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site3.png"} alt="site3" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site2.png"} alt="site2" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site4.png"} alt="site4" width={1440} height={820} />
        </li>
        <li>
          <Image src={"/site5.png"} alt="site5" width={1440} height={820} />
        </li>
      </ul>
    </div>
  );
}
