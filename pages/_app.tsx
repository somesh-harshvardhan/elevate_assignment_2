import ContextParent from "@/src/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextParent>
      <Component {...pageProps} />
    </ContextParent>
  );
}
