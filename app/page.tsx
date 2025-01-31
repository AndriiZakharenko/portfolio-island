"use client";

import HomeInfo from "@/components/HomeInfo";
import { soundoff, soundon } from "@/public/icons";
import { sakura } from "@/public/music";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingMusic) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo />
      </div>
      <div className="absolute bottom-2 left-2">
        <Image
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
          priority
        />
      </div>
    </section>
  );
}
