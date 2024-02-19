import Link from "next/link";
import ArtPiecePreview from "../../components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <>
      {pieces.map((piece) => (
        <>
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            slug={piece.slug}
          />
        </>
      ))}
    </>
  );
}
