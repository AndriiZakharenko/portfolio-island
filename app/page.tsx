"use client";

import HomeInfo from "@/components/HomeInfo";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import { soundoff, soundon } from "@/public/icons";
import { sakura } from "@/public/music";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if we're in the client-side
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43.4]);
  const [islandRotation, setIslandRotation] = useState([0, -6.5, -43.4]);

  useEffect(() => {
    setIsClient(true);
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

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43.4];
    const screenRotation = [0.1, 4.7077, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, screenRotation];
  };

  useEffect(() => {
    if (!isClient) return;
    const [screenScale, screenPosition, screenRotation] =
      adjustIslandForScreenSize();
    setIslandScale(screenScale);
    setIslandPosition(screenPosition);
    setIslandRotation(screenRotation);
  }, [isClient]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo />
      </div>

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Island
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>

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
