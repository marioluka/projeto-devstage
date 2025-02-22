import Image from 'next/image';
import bronze from '../../assets/Medal-bronze.svg';
import gold from '../../assets/Medal-gold.svg';
import silver from '../../assets/Medal-silver.svg';

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5 ">
      <h2 className="text-xl text-gray-200 font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Mario luka
          </span>

          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>

        <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Mario luka
          </span>

          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>

        <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Mario luka
          </span>

          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={bronze} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  );
}
