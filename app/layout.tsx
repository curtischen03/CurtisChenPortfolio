import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeProvider"
import { cn } from "@/lib/utils"
import { ActiveSectionProvider } from "@/context/ActiveSectionProvider"

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
  const tabName = "Curtis Chen"
  const tabIconSrc = "portfolioLogo.png"
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <head>
        <title>{tabName}</title>
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
