import React from "react";
import { popupContent } from "@/constants/popupContent/popupContent";
import { arrow } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  const content = popupContent[currentStage as keyof typeof popupContent];

  if (!content) return null;

  if (content.type === "text") {
    return React.cloneElement(content.content, {
      className:
        "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5",
    });
  }

  if (content.type === "link") {
    return (
      <div className="info-box">
        <p
          className="font-medium sm:text-xl text-center"
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
        <Link href={content.link.href} className="neo-brutalism-white neo-btn">
          {content.link.label}
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
