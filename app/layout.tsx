import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeProvider"
import { cn } from "@/lib/utils"
import { ActiveSectionProvider } from "@/context/ActiveSectionProvider"
import { tabName, tabIconSrc, metaDescription } from "@/data/resume"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SPZGTKKHHC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SPZGTKKHHC');
        `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
