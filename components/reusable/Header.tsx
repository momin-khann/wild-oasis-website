import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

async function Header() {
  const session = await auth();
  const profileImage = session?.user?.image;

  return (
    <header className="py-5 pb-12">
      <div className="wo-container flexBetween">
        {/* --- Logo  --- */}
        <a href="/public" className="flexCenter gap-4">
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

            {/* If not logged in */}
            {!session?.user && (
              <li>
                <Link
                  href={"/login"}
                  className="hover:text-accent-400 transition-colors"
                >
                  Login / Register
                </Link>
              </li>
            )}

            <li>
              {/* If logged in */}
              {profileImage && (
                <Link
                  href={"/dashboard"}
                  className="hover:text-accent-400 transition-colors flex gap-4 items-center"
                >
                  <img
                    className="h-8 rounded-full"
                    src={profileImage}
                    alt={"user image"}
                  />
                  <span>Guest area</span>
                </Link>
              )}

              {session && !profileImage && <span>Guest area</span>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
