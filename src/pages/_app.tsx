import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "next/font/google";
const Roboto = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
