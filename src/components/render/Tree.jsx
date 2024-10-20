/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Tree(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf"
  )
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <mesh
        geometry={nodes["tree-beech"].geometry}
        material={materials.color_main}
      />
    </group>
  )
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf"
)
