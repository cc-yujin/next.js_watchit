import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
