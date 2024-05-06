import Image from 'next/image';

export default function Page() {
  return (
    <div className="grid-rows-auto grid grid-cols-3 gap-5">
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
    </div>
  );
}
