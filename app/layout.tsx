import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import FloatingAssistant from "@/components/assistant/FloatingAssistant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ChemZim — Master IGCSE & A-Level Chemistry",
    template: "%s | ChemZim",
  },
  description:
    "The ultimate chemistry learning platform for IGCSE and A-Level students. Practice with past paper questions, track your progress, and level up your chemistry skills.",
  keywords: [
    "IGCSE Chemistry",
    "A-Level Chemistry",
    "Cambridge Chemistry",
    "Chemistry Practice",
    "Past Papers",
    "MCQ",
    "Chemistry Quiz",
    "O-Level Chemistry",
    "AS Chemistry",
  ],
  authors: [{ name: "ChemZim" }],
  openGraph: {
    title: "ChemZim — Master IGCSE & A-Level Chemistry",
    description:
      "The ultimate chemistry learning platform for IGCSE and A-Level students.",
    type: "website",
    locale: "en_US",
    siteName: "ChemZim",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemZim — Master IGCSE & A-Level Chemistry",
    description:
      "The ultimate chemistry learning platform for IGCSE and A-Level students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <AuthProvider>
          {children}
          <FloatingAssistant />
        </AuthProvider>
      </body>
    </html>
  );
}
