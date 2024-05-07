import Image from 'next/image';
import Link from 'next/link';
import { FaceSmileIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-5 text-xl font-bold text-gray-800 md:text-3xl md:leading-normal">
          Produkter
        </h1>
      </div>
      <div className="grid-rows-auto grid grid-cols-3 gap-5">
        <Link href={'/'}>
          <div className="flex flex-col items-center overflow-hidden rounded bg-gray-50 p-2 shadow-lg hover:bg-gray-100">
            <h2 className="mb-2 mt-2 text-xl font-bold">Dashboard Page</h2>
            <p className="mb-2 text-base text-gray-700">hei</p>
            <Image
              src="/graph.jpg"
              width={460}
              height={520}
              className="m-2 rounded"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </Link>
        <Link href={'/'}>
          <div className="flex flex-col items-center overflow-hidden rounded bg-gray-50 p-2 shadow-lg hover:bg-gray-100">
            <h2 className="mb-2 mt-2 text-xl font-bold">Dashboard Page</h2>
            <p className="mb-2 text-base text-gray-700">hei</p>
            <Image
              src="/graph.jpg"
              width={460}
              height={520}
              className="m-2 rounded"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
