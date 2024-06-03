import Image from "next/image";
import macAppStoreImg from "@/public/apple/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917 copy.svg";
import uiImage from "@/public/ui-image.png"; // Add this import statement

export default function GetClipPilot() {
  return (
    <section className="bg-yellow-50 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-green-700">Instantly</span> Access Your
            Essential Clipboard Content. Get ClipPilot Now for Only{" "}
            <span className="text-green-700">$0.99</span>
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Effortlessly keep track of every text and image you've copied. Turn
            Your macOS Clipboard into a Perfectly Organized, Intuitive
            Productivity Powerhouse.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://apps.apple.com/us/app/clippilot-clipboard/id6476124023?mt=12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={macAppStoreImg}
                alt="Download on the Mac App Store"
                width={200}
                height={60}
                priority={true}
              />
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Compatible with macOS 11.0 or later.
          </p>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="relative">
          <Image
            src={uiImage}
            alt="UI Screenshot"
            width={700}
            height={400}
            priority={true}
            className="relative z-10"
          />
          <div className="absolute inset-x-0 bottom-0 w-full h-96 bg-primaryYellow rounded-t-full z-0"></div>
        </div>
      </div>
    </section>
  );
}
