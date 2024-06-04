import Link from "next/link";
import GetClipPilot from "@/components/GetClipPilot";
import Image from "next/image";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import clipPilotImg from "@/public/logo1.png";

export default function Page() {
  return (
    <>
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto bg-yellow-50">
        <div className="flex items-center space-x-4">
          <Image
            src={clipPilotImg}
            alt="ClipPilot Icon"
            width={48}
            height={48}
            priority={true}
            className="rounded-box"
            placeholder="blur"
          />
          <h1 className="text-xl font-bold">ClipPilot</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://apps.apple.com/us/app/clippilot-clipboard/id6476124023?mt=12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get it now
          </a>
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ClipPilot Blog
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center text-center gap-6 px-8 py-24 bg-yellow-50">
        <GetClipPilot />
        <FeaturesAccordion />
        {/* <section className="flex flex-col items-center justify-center gap-4 mt-8">
          <Link href="/blog" className="link link-hover text-sm text-green-700">
            Fancy a blog?
          </Link>
        </section> */}
      </main>
    </>
  );
}
