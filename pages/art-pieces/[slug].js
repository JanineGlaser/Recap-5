import Image from "next/image";
import { useRouter } from "next/router";
export default function DetailPage({ pieces }) {
  const router = useRouter();

  const artIndex = pieces.find(({ slug }) => slug === router.query.slug);
  console.log(artIndex);
  const { imageSource, title, artist, year, genre } = artIndex;

  function handleClick() {}
  return (
    <>
      <button type="button" onClick={() => router.back()}>
        back
      </button>
      <Image src={imageSource} alt={title} height={300} width={300} />
      <h2>Title: {title}</h2>
      <h3>Artist: {artist}</h3>
      <h4>{year}</h4>
      <h4>{genre}</h4>
    </>
  );
}
