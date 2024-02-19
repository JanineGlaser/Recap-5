import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import styled from "styled-components";
import Spotlight from "../components/Spotlight";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  if (error) {
    return <h1> Error, try again, and again... </h1>;
  }

  if (isLoading) {
    return <h1> please hold the line...</h1>;
  }

  console.log(data);

  return (
    <>
      <StyledHeadline>Famous Art Gallery</StyledHeadline>
      <StyledSpotlightHeadline>Todays Spotlight</StyledSpotlightHeadline>
      <Spotlight pieces={data} />
      <ArtPieces pieces={data} />;
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledSpotlightHeadline = styled.h2`
  text-align: center;
`;
