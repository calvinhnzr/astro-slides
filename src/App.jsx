import { useEffect, useRef, useMemo } from "react"
import { useAtom } from "jotai"
import classNames from "classnames"
import { styled } from "styled-components"
import * as THREE from "three"
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber"
import {
  Box,
  View,
  CameraControls,
  Stars,
  Stage,
  Html,
} from "@react-three/drei"
import { Perf } from "r3f-perf"

import {
  slidesAtom,
  currentArticleAtom,
  explosionViewAtom,
} from "@/store/atoms"

import useGamepad from "@/hooks/useGamepad"
import useKeyDown from "@/hooks/useKeydown"
import useFullscreen from "@/hooks/useFullScreen"

// import { Slideshow } from "@/components/styled/Slideshow"
import { Slideshow } from "./components/slideshow/index"
import { Progress } from "@/components/styled/Progress"

export function App() {
  const [slidesData] = useAtom(slidesAtom)
  // const [currentArticle] = useAtom(currentArticleAtom)
  const [explosionView, setExplosionView] = useAtom(explosionViewAtom)

  const MAX_VALUE = slidesData[0].length - 1
  const [isFullscreen, toggleFullscreen] = useFullscreen()
  const { buttons, axes } = useGamepad(true)

  useKeyDown((event) => {
    switch (event.key) {
      case "f":
        toggleFullscreen()
        break
      case "F":
        toggleFullscreen()
        break
      case "e":
        setExplosionView(!explosionView)
        break
      case "E":
        setExplosionView(!explosionView)
        break
    }
  })

  // Gamepad API
  useEffect(() => {
    if (buttons[15] || buttons[1])
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }))

    if (buttons[14] || buttons[2])
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }))

    if (buttons[13] || buttons[0])
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }))

    if (buttons[12] || buttons[3])
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }))

    if (buttons[6] || buttons[7]) toggleFullscreen()

    if (buttons[4] || buttons[5]) setExplosionView(!explosionView)
  }, [buttons, axes])

  return (
    <>
      <div id="app">
        <Slideshow data={slidesData} max={MAX_VALUE} />
      </div>

      <Canvas
        className="canvas canvas-view"
        eventSource={document.getElementById("root")}
      >
        {explosionView ? <Perf position={"top-left"} /> : null}
        <View.Port />
      </Canvas>

      {/* {!explosionView ? (
        <Progress max={MAX_VALUE} value={currentArticle} />
      ) : null} */}

      <Canvas
        className="canvas canvas-background"
        // eventSource={document.getElementById("root")}
      >
        {/* <CameraControls makeDefault /> */}
        <Stars
          radius={120}
          depth={10}
          count={5000}
          factor={12}
          saturation={20}
          fade
          speed={1}
        />
      </Canvas>
    </>
  )
}

export default App
