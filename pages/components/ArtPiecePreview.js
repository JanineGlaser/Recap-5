import Image from "./Image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledList>
      <Image image={image} title={title} />
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </StyledList>
  );
}

const StyledList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;
