import styled from "styled-components"

export const Loader = styled.div`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: l1 1s infinite;

  @keyframes l1 {
    to {
      transform: rotate(0.5turn);
    }
  }
`
