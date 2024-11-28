"use client";

import { Environment } from "@react-three/drei";
import { FloatingCan } from "./FloatingCan";

type Props = {};

export const Scene = (props: Props) => {
  return (
    <group>
      <FloatingCan />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};
