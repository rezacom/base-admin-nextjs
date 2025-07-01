// import { useTranslations } from "next-intl";

import Image from "next/image";

export default function Home() {
  // const t = useTranslations("Dashboard");

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center border p-4 rounded-full shadow-lg h-[200px] w-[200px]">
        <Image src="/vercel.svg" alt="logo" width={200} height={200} />
      </div>
    </div>
  );
}
