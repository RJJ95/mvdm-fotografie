import styled from "styled-components";

// Components
import Column from "../../components/primitives/column";
import Image from "../../components/primitives/image";

export const PortfolioImage = styled(Image)`
  cursor: pointer;
  background-color: black;
  transition: opacity 0.5s;

  :hover {
    opacity: 0.5;
  }
`;

export const ImageColumn = styled(Column)`
  padding-right: 3px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 99.55%;
  width: 100%;
  opacity: 0;
  transition: 300ms ease;
  background-color: black;
  cursor: pointer;

  :hover {
    opacity: 0.6;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
