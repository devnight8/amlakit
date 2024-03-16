import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-2">
        <div>
            <h3><Link className="font-bold text-2xl" href="/">املاکیت</Link></h3>
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4  space-x-reverse group">
              <li className="hover:text-blue-700 transition-all">
                <Link href="#">صفحه اصلی </Link>
              </li>
              <li className="hover:text-blue-700 transition-all">
                <Link href="#">املاک</Link>
              </li>
              <li className="hover:text-blue-700 transition-all">
                <Link href="#">درباره ما </Link>
              </li>
              <li className="hover:text-blue-700 transition-all">
                <Link href="#">تماس با ما </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="bg-blue-700 p-2 rounded text-white text-sm">ثبت نام / ورود</button>
      </header>
    </>
  );
}

export default Header;
