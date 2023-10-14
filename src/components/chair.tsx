/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 c:\\Users\\erick\\project\\personal\\furniture-configurator\\public\\model\\chair.glb -o c:\\Users\\erick\\project\\personal\\furniture-configurator\\public\\model\\chair.tsx --types 
*/

"use client";

import * as THREE from "three";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { furnitureConfig } from "@/helpers/store";

type GLTFResult = GLTF & {
  nodes: {
    legs: THREE.Mesh;
    cushions: THREE.Mesh;
    back: THREE.Mesh;
    supports: THREE.Mesh;
    base: THREE.Mesh;
  };
  materials: {
    wire_002049060: THREE.MeshStandardMaterial;
    wire_196010216: THREE.MeshStandardMaterial;
  };
};

type ChairGroup = JSX.IntrinsicElements["group"];
interface ChairProps extends ChairGroup {
  selectedPart: string;
  selectedTexture: string;
}

export function Chair({ selectedPart, selectedTexture, ...rest }: ChairProps) {
  const ref = useRef<THREE.Group>(null!);
  const snap = useSnapshot(furnitureConfig);
  const [hovered, set] = useState<string>("");
  const { nodes, materials } = useGLTF("/model/chair.glb") as GLTFResult;

  const partTexture = useTexture({ map: `/img/texture/${selectedTexture}` });

  useEffect(() => {
    if (selectedPart) {
      ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name !== "") {
          if (child.name === selectedPart) {
            // loop through textures and change the wrapped texture
            Object.values(partTexture).forEach((texture) => {
              texture.wrapS = THREE.RepeatWrapping;
              texture.wrapT = THREE.RepeatWrapping;
            });
            const newMaterial = new THREE.MeshStandardMaterial({
              map: partTexture.map,
            });
            child.material = newMaterial;
          }
        }
      });
    }
  }, [selectedTexture]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.PI * 2.75;
  });

  const hoveredEffect = useCallback(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="24" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;

    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;

      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    }
  }, [hovered, snap.items]);

  useEffect(() => {
    hoveredEffect();
  }, [hovered]);

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        set(e.object.name);
      }}
      onPointerOut={(e) => e.intersections.length === 0 && set("")}
      onPointerMissed={() => (furnitureConfig.current = null)}
      onClick={(e) => (
        e.stopPropagation(), (furnitureConfig.current = e.object.name)
      )}
      receiveShadow
      castShadow
    >
      <mesh
        name="legs"
        geometry={nodes.legs.geometry}
        material={materials.wire_002049060}
        material-color={snap.items.legs}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.096}
        castShadow
        receiveShadow
      />
      <mesh
        name="cushions"
        geometry={nodes.cushions.geometry}
        material={materials.wire_196010216}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.096}
        castShadow
        receiveShadow
      />
      <mesh
        name="back"
        geometry={nodes.back.geometry}
        material={materials.wire_002049060}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.096}
        castShadow
        receiveShadow
      />
      <mesh
        name="supports"
        geometry={nodes.supports.geometry}
        material={nodes.supports.material}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.096}
        castShadow
        receiveShadow
      />
      <mesh
        name="base"
        geometry={nodes.base.geometry}
        material={materials.wire_002049060}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.096}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/model/chair.glb");
