import Image from "./Image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <Image image={image} title={title} />
    </li>
  );
}
