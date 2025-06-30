// import { useTranslations } from "next-intl";

import Image from "next/image";

export default function Home() {
  // const t = useTranslations("Dashboard");

  return (
    <div className="flex items-center justify-center h-full">
      <Image src="/vercel.svg" alt="logo" width={200} height={200} />
    </div>
  );
}
