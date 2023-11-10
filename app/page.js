import styles from "./ui/home.modules.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import mikasa from "../public/mikasa.jpg";
export default function Page() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/mikasa.jpg"
        width={1000}
        height={760}
        priority
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <Image
        src="/mikasa.jpg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </div>
  );
}
