import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/customTheme.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        {
            import("bootstrap/dist/js/bootstrap");
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
