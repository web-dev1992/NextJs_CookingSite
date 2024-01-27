import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/themes";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "CookingSite",
  description: "A Next.js Cooking Site",
  applicationName: "CookingSite",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "CookingSite"],
  creator: "Taraneh Mohebi asar",
  publisher: "Taraneh Mohebi asar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <div className="max-w-screen-2xl mx-auto">
              <Navbar />
              {children}
              <Footer />
            </div>
          </body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}
