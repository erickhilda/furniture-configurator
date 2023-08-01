import * as THREE from "three";
import { proxy } from "valtio";

type FurnitureConfig = {
  current: string | null;
  items: {
    [key: string]: THREE.Texture | null;
  };
};

export const furnitureConfig: FurnitureConfig = proxy({
  current: "" as string | null,
  items: {
    legs: null as THREE.Texture | null,
    cushions: null as THREE.Texture | null,
    back: null as THREE.Texture | null,
    supports: null as THREE.Texture | null,
    base: null as THREE.Texture | null,
  },
});
