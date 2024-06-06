"use client";

import React, { useState, useRef } from "react";
import {
  CameraIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

// interface Feature {
//   title: string;
//   description: string;
//   type?: "video" | "image";
//   path?: string;
//   format?: string;
//   alt?: string;
//   Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
// }

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  Icon:
    | typeof CameraIcon
    | typeof MagnifyingGlassIcon
    | typeof ShieldCheckIcon
    | typeof BookmarkIcon;
}

const features: Feature[] = [
  {
    title: "Integrated Screenshots",
    description:
      "Capture, tag, and find screenshots easily. No more scrolling through endless folders or trying to remember cryptic file names – just search for the relevant tag, and voila!",
    type: "video",
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/videos/integrated_screenshots.mp4`,
    format: "video/mp4",
    Icon: CameraIcon,
  },
  {
    title: "Find and Insert Text",
    description:
      "Use the search function to find and insert text like email templates.",
    type: "video",
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/videos/find_and_insert_text.mp4`, // Placeholder path
    format: "video/mp4",
    Icon: MagnifyingGlassIcon,
  },
  {
    title: "Block Specific Apps for Privacy",
    description: "Block specific apps to ensure your privacy.",
    type: "image",
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/block_apps.png`,
    alt: "Blocking specific apps for privacy",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Bookmarks Feature",
    description: "Bookmark your favorite clipboard items for easy access.",
    type: "image",
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/bookmarks.png`,
    alt: "Bookmarks feature",
    Icon: BookmarkIcon,
  },
];

const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, Icon } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          <Icon className="w-6 h-6 text-green-700" />
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          Simplify Your Life with ClipPilot:
          <br />
          <span className="bg-neutral text-neutral-content px-2 md:px-4 mt-2 md:mt-4 leading-relaxed">
            Discover How Its Powerful Features Streamline Your Clipboard
            Workflow
          </span>
        </h2>

        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
