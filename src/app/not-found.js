import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="h-screen flex items-center justify-center  ">
      <div className="flex flex-col gap-y-6 items-center justify-center ">
        <h1 className="text-4xl font-bold p-2  bg-gray-100 rounded">
          صفحه ی مورد نظر شما پیدا نشد !!
        </h1>
        <Link href="/" className="bg-primary p-2 rounded text-white">
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
