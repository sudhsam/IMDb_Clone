import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "./../components/Navbar";
import SearchBox from "./../components/SearchBox";

export const metadata = {
  title: "IMDb_Clone",
  description: "This is IMDb Clone Website",
  // <link rel="icon" href="/favicon.ico"/>
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
