import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import styled from "@emotion/styled"
import { COLOR_BACKGROUND, COLOR_BACKGROUND_DARK } from "@/store/base"
import { currentArticleAtom } from "@/store/atoms"
import "@/styles/Slide.css"

// Vertical Srcoll
const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: 0.5s transform linear;
  will-change: transform;
  transform: translateX(${(props) => props.currentArticle * -100}%);
`

export const Slideshow = ({ data, max }) => {
  const [currentArticle, setCurrentArticle] = useAtom(currentArticleAtom)

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        if (currentArticle < max) {
          setCurrentArticle(currentArticle + 1)
        }
        break
      case "ArrowLeft":
        if (currentArticle > 0) {
          setCurrentArticle(currentArticle - 1)
        }
        break
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <Main currentArticle={currentArticle}>
      {data.map((article, index) => (
        <ArticleWrapper
          key={index}
          index={index}
          max={article.length - 1}
          currentArticle={currentArticle}
        >
          {article.map((section, index) => {
            const el = section[0]
            return (
              <SectionWrapper key={index} el={el}>
                {<el.default />}
              </SectionWrapper>
            )
          })}
        </ArticleWrapper>
      ))}
    </Main>
  )
}

// Horizontal Srcoll
const Article = styled.article`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;

  flex-direction: column;
  transition: 0.5s transform linear;
  will-change: transform;
  transform: translateY(${(props) => props.currentSection * -100}%);

  background-color: ${COLOR_BACKGROUND};
  &:first-of-type {
    background-color: ${COLOR_BACKGROUND_DARK};
  }
`

const ArticleWrapper = (props) => {
  const [currentSection, setCurrentSection] = useState(0)

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        if (currentSection < props.max) {
          setCurrentSection(currentSection + 1)
        }
        break
      case "ArrowUp":
        if (currentSection > 0) {
          setCurrentSection(currentSection - 1)
        }
        break
    }
  }

  useEffect(() => {
    if (props.currentArticle === props.index)
      window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return <Article currentSection={currentSection}>{props.children}</Article>
}

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 1rem;
`

const SectionWrapper = (props) => {
  return (
    <Section className={props.el.type || "simple"}>{props.children}</Section>
  )
}
