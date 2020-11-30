import type { AppProps } from "next/app";
import { motion } from "framer-motion";

import "../theme/globalStyles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
