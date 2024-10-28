import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <div className="text-center bg-green-700">
        <h1 className="text-4xl pt-10 font-bold text-center">Home Page</h1>
        <Link href="/myNewPage">
          <button className="m-10 px-6 py-3 bg-blue-500 text-white font-bold rounded hover:transition duration-200 hover:bg-blue-800">
            Go to My New Page
          </button>
        </Link>
      </div>
    </div>
  );
}
