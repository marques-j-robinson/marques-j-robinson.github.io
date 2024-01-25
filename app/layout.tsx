import '@/app/ui/global.css'

export const metadata = {
  title: 'Marques Robinson',
  description: 'Personal website for Marques Robinson',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body class="Site">{children}</body>
    </html>
  )
}
