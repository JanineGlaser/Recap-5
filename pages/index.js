import ArtPieces from "../components/ArtPieces";
import styled from "styled-components";
import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      <StyledHeadline>Famous Art Gallery</StyledHeadline>
      <StyledSpotlightHeadline>Todays Spotlight</StyledSpotlightHeadline>
      <Spotlight pieces={pieces} />
      {/* <ArtPieces pieces={pieces} />; */}
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledSpotlightHeadline = styled.h2`
  text-align: center;
`;
