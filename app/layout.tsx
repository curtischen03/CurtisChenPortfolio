import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeProvider"
import { cn } from "@/lib/utils"
import { ActiveSectionProvider } from "@/context/ActiveSectionProvider"
import { tabName, tabIconSrc, metaDescription } from "@/data/resume"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        "scroll-smooth"
      )}
    >
      <head>
        <title>{`${tabName} | Full Stack Developer`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" type="image/x-icon" href={tabIconSrc} />
      </head>
      <body>
        <ThemeProvider>
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
