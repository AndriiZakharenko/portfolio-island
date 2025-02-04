"use client";

import HomeInfo from "@/components/HomeInfo";
import Loader from "@/components/Loader";
import Bird from "@/models/Bird";
import Island from "@/models/Island";
import Plane from "@/models/Plane";
import Sky from "@/models/Sky";
import { soundoff, soundon } from "@/public/icons";
import { sakura } from "@/public/music";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43.4]);
  const [islandRotation, setIslandRotation] = useState([0, -6.5, -43.4]);

  const [planeScale, setPlaneScale] = useState<[number, number, number]>([
    3, 3, 3,
  ]);
  const [planePosition, setPlanePosition] = useState<[number, number, number]>([
    0, -4, -4,
  ]);

  const [isRotating, setIsRotating] = useState(false);

  const [currentStage, setCurrentStage] = useState(1);

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

  const adjustPlaneForScreenSize = (): [
    [number, number, number],
    [number, number, number]
  ] => {
    let screenScale: [number, number, number];
    let screenPosition: [number, number, number];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  useEffect(() => {
    if (!isClient) return;

    const [screenScale, screenPosition, screenRotation] =
      adjustIslandForScreenSize();
    setIslandScale(screenScale);
    setIslandPosition(screenPosition);
    setIslandRotation(screenRotation);

    const [planeScreenScale, planeScreenPosition] = adjustPlaneForScreenSize();
    setPlaneScale(planeScreenScale);
    setPlanePosition(planeScreenPosition);
  }, [isClient]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo />
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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

          <Bird />
          <Sky isRotating={isRotating} />

          <Island
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20.1, 0]}
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
