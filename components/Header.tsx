import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1 flex items-center gap-1">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <p className="text-xl text-white font-medium hidden md:block">
          WriteStream
        </p>
      </Link>
      {children}
    </div>
  );
};

export default Header;
