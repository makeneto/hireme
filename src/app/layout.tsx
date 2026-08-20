import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import ThemeProvider from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import StoreProvider from "@/components/StoreProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hireme | Makene Neto",
  description:
    "Hireme is an automatic application email generator: you enter the company, job title, company language, application area and the documents that will be mentioned, and it creates a complete email, ready to send, eliminating repetitive writing for each new application.",
  keywords: [
    "Hireme",
    "Hiremme",
    "Applications",
    "Email",
    "Makene",
    "Makene Neto",
  ],
  authors: [{ name: "Makene Neto", url: "https://hiremme.vercel.app" }],
  openGraph: {
    title: "Hireme | Makene Neto",
    description:
      "Hireme is an automatic application email generator: you enter the company, job title, company language, application area and the documents that will be mentioned, and it creates a complete email, ready to send, eliminating repetitive writing for each new application.",
    images: ["https://i.postimg.cc/C1N9nNgy/hireme.png"],
    url: "https://i.postimg.cc/C1N9nNgy/hireme.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body>
        <StoreProvider>
          <ThemeProvider>
            <Navbar />
            <main className="py-8 px-8 md:py-10 md:px-14 xl:px-60">
              {children}
            </main>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
