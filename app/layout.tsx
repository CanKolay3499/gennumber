import { Lexend } from '@next/font/google'

import './globals.css'

const lexend = Lexend({ subsets: ['latin'], variable: '--font' })

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const desc = "Generate a random number!"

  return (
    <html className={lexend.className} lang="en">
      <head>
        <title>gennumber</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="theme-color" content="#000000" />

        <meta name="author" content="Can Kolay" />
        <meta name="keywords" content="Number, Number Generator" />

        <meta property="og:type" content="website" />

        <meta name="description" content={desc} />
        <meta property="og:description" content={desc} />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
