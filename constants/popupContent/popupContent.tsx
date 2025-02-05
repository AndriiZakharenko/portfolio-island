import { ReactElement } from "react";

interface TextContent {
  type: "text";
  content: ReactElement;
}

interface LinkContent {
  type: "link";
  text: string;
  link: {
    href: string;
    label: string;
  };
}

export type PopupContent = TextContent | LinkContent;

export const popupContent: Record<number, PopupContent> = {
  1: {
    type: "text",
    content: (
      <h1>
        Hi, I&apos;m
        <span className="font-semibold mx-2"> Andrii</span>
        👋
        <br />a Software Engineer from Ukraine 🇺🇦
      </h1>
    ),
  },
  2: {
    type: "link",
    text: "Built a strong skill set through <br /> experiences with different companies.",
    link: { href: "/about", label: "Learn more" },
  },
  3: {
    type: "link",
    text: "Turned ideas into successful projects. <br /> Curious to learn more?",
    link: { href: "/projects", label: "Visit my portfolio" },
  },
  4: {
    type: "link",
    text: "Ready to bring your project to life? <br /> I'm here to help.",
    link: { href: "/contact", label: "Let's talk" },
  },
};
