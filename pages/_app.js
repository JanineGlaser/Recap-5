import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
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

  //console.log(data);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
      <Layout />
    </>
  );
}
