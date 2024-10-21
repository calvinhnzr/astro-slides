// Refactor me pls, mit animationen, generisch
import React, { useState, useEffect } from "react"
import { bm_color_green, bm_color_gray_dark } from "@/store/base"
import styled from "styled-components"

const Bubble = styled.span`
  color: white;
  font-family: 300;
  letter-spacing: 0.75px;
  font-size: 1.5rem;
  padding: 0.75rem 0;

  span {
    /* outline: 1px solid green; */
    /* border-radius: 7px; */
    padding: 0.75rem 1rem;
    width: fit-content;
    font-weight: 300;
  }

  &.left {
    text-align: left;
    position: relative;
    &::before {
      /* content: url("./svg/bubble-left.svg"); */
      color: red;
      position: absolute;
      top: -2px;
      left: -1.8rem;
      z-index: 1;
    }

    span {
      background-color: ${bm_color_gray_dark};
    }
  }

  &.right {
    text-align: right;
    position: relative;

    &::after {
      /* content: url("./svg/bubble-right.svg"); */
      position: absolute;
      top: -2px;
      right: -1.8rem;
      z-index: 1;
    }
    span {
      background-color: ${bm_color_green};
    }
  }
`

const spacing = "9rem"

const Container = styled.div`
  /* outline: 1px solid red; */
  /* background-color: red; */

  /* outline: 5px solid white; */
  /* border-radius: 1rem; */
  /* background-image: url("./img/chat-background.jpg"); */
  /* background-size: cover; */
  /* box-shadow: 1px 1px 40px 10px rgba(0, 0, 0, 0.15); */

  /* background-color: #2b3347; */

  /* grid-column: 4 / 10;
  grid-row: 1 / 13; */
  /* margin: 4rem 0; */
  /* height: 100%;
  width: 35%; */
  width: 40rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  &::before {
    /* content: ""; */
    position: absolute;
    /* outline: 1px solid blue; */
    top: ${spacing};
    width: 100%;
    height: 20rem;
    background: linear-gradient(180deg, #626f82 0%, rgba(98, 111, 130, 0) 100%);
  }
  &::after {
    /* content: ""; */
    position: absolute;
    top: 0;
    /* outline: 1px solid green; */
    width: 100%;
    height: ${spacing};
    background-color: #626f82;
  }

  /*  */
  > h5 {
    text-align: center;
    color: white;
    font-size: 1rem;
    display: none;
    span {
      /* background-color: #cd4d4d; */
      width: fit-content;
      padding: 0.5rem 0.75rem;
      border-radius: 7px;
    }
  }

  &:has(> .image) {
    display: flex;
    align-items: flex-end;

    &:has(.left) {
      align-items: flex-start;
    }
    &:has(.right) {
      align-items: flex-end;
    }
  }

  .image {
    width: 24rem;
    height: 30rem;
    /* padding: 0.75rem; */
    /* background-color: #626f82; */
    border: 0.75rem solid ${bm_color_green};
    /* border-radius: 7px; */

    position: relative;
    z-index: 0;

    &.left {
      border: 0.75rem solid ${bm_color_gray_dark};
    }

    &.right {
      border: 0.75rem solid ${bm_color_green};
    }

    &::before {
      /* content: url("./svg/bubble-right.svg"); */
      position: absolute;
      /* top: -1.5px; */
      top: -0.75rem;
      /* left: -2.5rem; */
      right: -2.5rem;
      z-index: 0;
    }

    .crop {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transform-origin: center;
        object-fit: cover;
        transform: scale(1.3) translateX(0rem) translateY(-1rem);
      }
    }
  }
`
export const Chat = (props) => {
  const [first, setfirst] = useState(0)

  return (
    <Container>
      {props.conversation &&
        props.conversation.map((bubble, index) => (
          <Bubble key={index} className={index % 2 ? "left" : "right"}>
            <span>{bubble}</span>
          </Bubble>
        ))}
      {props.end && (
        <h5>
          <span>{props.end}</span>
        </h5>
      )}
      {props.img && (
        <div className={"image " + props.className}>
          <div className="crop">
            <img src={props.img} />
          </div>
        </div>
      )}
    </Container>
  )
}

export default Chat
