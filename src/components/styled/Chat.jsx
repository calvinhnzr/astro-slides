import React, { useState, useEffect } from "react"
import { bm_color_green, bm_color_gray_dark } from "@/store/base"
import styled from "styled-components"

const Bubble = styled.div`
  &.left {
    background-color: ${bm_color_gray_dark};
  }

  &.right {
    background-color: ${bm_color_green};
  }
`
const Container = styled.div``

const ChatBVu = (props) => {
  const [first, setfirst] = useState(0)

  return (
    <Container>
      <Bubble className="left">A</Bubble>
      <Bubble className="right">B</Bubble>
    </Container>
  )
}

export default Chat
