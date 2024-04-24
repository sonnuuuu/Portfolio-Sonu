import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: 'Sonu Portfolio',
	authors: {
		name: "Sonuuuu",
	},

	description:
  "I am a passionate software developer, Can't develop feelings for her but I can build modern applications that users love",
	openGraph: {
		title: "Sonu",
		description:
			"I'm a passionate software developer, Can't develop feelings for her but I can build modern applications that users love.",
		url: "https://localhost:3000",
		siteName: "Sonu",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "Soonnuuuu", "dailywebcoding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
