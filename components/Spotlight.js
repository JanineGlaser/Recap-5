import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ pieces }) {
  function getRandomPiece() {
    return Math.floor(Math.random() * pieces.length);
  }
  const random = getRandomPiece();
  console.log(random);

  const randomPiece = pieces[random];
  console.log(randomPiece);

  const spotlightImageSource = randomPiece.imageSource;

  const spotlightArtist = randomPiece.artist;

  console.log(spotlightImageSource, spotlightArtist);

  return (
    <>
      <ArtPiecePreview
        image={spotlightImageSource}
        artist={spotlightArtist}
        slug={randomPiece.slug}
      />
    </>
  );
}
