import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between
      items-center py-4 px-6 sm:px-16"
      >
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="rounded-full bg-white
        text-primary-blue 
        border-primary-blue min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
