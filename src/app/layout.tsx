import type { Metadata } from "next";
import "@/app/globals.css";
import { StoreProvider } from "@/context/StoreContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LiveChat from "@/components/LiveChat";

export const metadata: Metadata = {
  title: {
    default: "Shahroze Studio | Timeless Style. Modern Confidence.",
    template: "%s | Shahroze Studio"
  },
  description: "Shahroze Studio designs premium, minimalist apparel with a strong focus on high-quality materials, tailored fits, and elegant simplicity. Discover our organic cotton sweats, tees, and utility jackets.",
  metadataBase: new URL("https://shahrozestudio.com"),
  keywords: ["fashion", "luxury", "streetwear", "minimalist apparel", "organic cotton hoodies", "premium t-shirts", "designer clothing Pakistan", "premium fashion Lahore", "Pakistani designer clothing"],
  openGraph: {
    title: "Shahroze Studio | Timeless Style. Modern Confidence.",
    description: "Discover minimalist luxury streetwear made with organic fabrics.",
    url: "https://shahrozestudio.com",
    siteName: "Shahroze Studio",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahroze Studio",
    description: "Timeless Style. Modern Confidence.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans transition-colors duration-300 bg-genz-light text-genz-black dark:bg-genz-black dark:text-genz-light">
        <ThemeProvider>
          <StoreProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
            <LiveChat />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
