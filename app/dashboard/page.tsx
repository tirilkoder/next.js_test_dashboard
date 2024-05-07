import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-5 text-xl font-bold text-gray-800 md:text-3xl md:leading-normal">
          Velkommen
        </h1>
      </div>

      <div className="relative m-auto max-w-5xl">
        <div className="">
          <div className="absolute p-0 px-3 text-sm"> 1/3</div>

          <Image
            src="/graph.jpg"
            width={460}
            height={520}
            className="m-2 rounded"
            alt="Produkter"
          />
          <div className="absolute w-full px-3 pb-2 text-center text-sm">
            Beskrivelse
          </div>
        </div>

        <div className="">
          <div className="absolute p-0 px-3 text-sm"> 1/3</div>

          <Image
            src="/graph.jpg"
            width={460}
            height={520}
            className="m-2 rounded"
            alt="Produkter"
          />
          <div className="absolute w-full px-3 pb-2 text-center text-sm">
            Beskrivelse
          </div>
        </div>

        <div className="">
          <div className="absolute p-0 px-3 text-sm"> 1/3</div>

          <Image
            src="/graph.jpg"
            width={460}
            height={520}
            className="m-2 rounded"
            alt="Produkter"
          />
          <div className="absolute w-full px-3 pb-2 text-center text-sm">
            Beskrivelse
          </div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        {/* <a className="cursor-pointer absolute p-1/2 w-auto" onClick={plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={plusSlides(1)}>&#10095;</a>
        </div>
        <br>
      
        <div className="text-center">
  <span className="dot" onClick={currentSlide(1)}></span>
  <span className="dot" onClick={currentSlide(2)}></span>
  <span className="dot" onClick={currentSlide(3)}></span>*/}
      </div>
    </>
  );
}
