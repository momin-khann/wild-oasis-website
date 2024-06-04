import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className=" py-5">
      <div className="wo-container flexBetween">
        {/* --- Logo  --- */}
        <a href="/" className="flexCenter gap-4">
          <Image
            src={"/assets/logo.png"}
            height="60"
            width="60"
            loading={"lazy"}
            draggable={false}
            alt="The Wild Oasis logo"
          />
          <span className="text-xl font-semibold text-primary-100">
            The Wild Oasis
          </span>
        </a>

        {/* --- Navigation --- */}
        <nav className="z-10 text-xl">
          <ul className="hidden md:flex gap-16 items-center">
            <li>
              <Link
                href={"/cabins"}
                className="hover:text-accent-400 transition-colors"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="hover:text-accent-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/account"}
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
