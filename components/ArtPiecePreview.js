import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  // console.log(slug);

  return (
    <StyledList>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} height={300} width={300} />
      </Link>
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
