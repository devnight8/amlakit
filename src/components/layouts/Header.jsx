import Link from "next/link";
import MenuHumburger from "@/components/modules/MenuHumburger";

function Header() {
  return (
    <>
      <header className="px-2 md:px-0 flex justify-between items-center py-4 sticky z-10 top-0 bg-white ">
        <div className="md:hidden">
          <MenuHumburger/>
        </div>
        <div>
          <h3>
            <Link className="font-bold text-2xl" href="/">
              املاکیت
            </Link>
          </h3>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4  space-x-reverse group">
              <li className="hover:text-primary transition-all">
                <Link href="#">صفحه اصلی </Link>
              </li>
              <li className="hover:text-primary transition-all">
                <Link href="#">املاک</Link>
              </li>
              <li className="hover:text-primary transition-all">
                <Link href="#">درباره ما </Link>
              </li>
              <li className="hover:text-primary transition-all">
                <Link href="#">تماس با ما </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="bg-primary hover:bg-blue-800 transition-all py-2 px-4 rounded text-white text-[13px] md:text-[16px]">
          ثبت نام / ورود
        </button>
      </header>
    </>
  );
}

export default Header;
