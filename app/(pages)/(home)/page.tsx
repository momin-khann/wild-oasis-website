import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className={"wo-container"}>
      <Image
        src={"/assets/bg.png"}
        alt={"bg image"}
        className={"-z-10 object-cover"}
        fill
        loading={"lazy"}
        draggable={false}
      />

      <div className={"flex flex-col items-center pt-20 gap-8"}>
        <h1 className="text-6xl md:text-7xl text-center">
          Welcome To Paradise
        </h1>
        <Link
          href={"/cabins"}
          className="bg-accent-600 px-8 py-3 text-primary-800 font-semibold text-xl"
        >
          Explore luxury cabins
        </Link>
      </div>
    </section>
  );
}
