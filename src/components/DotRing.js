import styled from "styled-components";
import useMousePosition from "../hooks/usePointer";
import { MouseContext } from "../context/mouse-context";
import { useContext } from "react";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <Dot>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </Dot>
  );
};

export default DotRing;

const Dot=styled.div`
    .ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border: 2px solid rgba(31, 30, 30, 0.808);
  border: 12px solid #7ba9ff;

  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 120ms;
  transition-duration: 120ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
}

.dot {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: #7ba9ff;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
  transition: ease-in;
}
@media (max-width: 540px) {
  .dot{
    background-color: #ffffff00;

  }
  .ring{
    border: 12px solid #ffffff00;
  }
}
`