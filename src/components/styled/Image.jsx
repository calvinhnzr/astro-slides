import styled from "styled-components"

const Container = styled.div`
  grid-column: 1 / 13;
  grid-row: 1 / 13;

  overflow: hidden;
  background-color: white;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #4c5869;
    opacity: 0.3;
    inset: 0;
    z-index: 1;
  }

  .info {
    display: none;
    position: absolute;
    bottom: 3.5rem;
    right: 3rem;
    z-index: 2;
    text-align: end;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
    color: white;
    color: #4c5869;
    p {
      font-size: 1.2rem;
      /* color: #4c5869; */
      color: #4c5869;
      /* font-weight: 600; */
    }
    a {
      /* color: #4c5869; */
      color: #4c5869;
      font-size: 1rem;

      text-decoration: underline 3px;
      text-underline-position: under;
    }
  }
`

// FullScreen, layout grid required
const Img = styled.img`
  /* filter: brightness(0.5); */
  transform: scale(0.9);
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* filter: brightness(0.7); */
`

export const Image = (props) => {
  return (
    <Container>
      <span className="info">
        <p>{props.alt}</p>
        {props.children}
      </span>
      <Img src={props.src} />
    </Container>
  )
}
