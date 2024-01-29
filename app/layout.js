import './globals.css'
import StyledComponentsRegistry from './registry'

export const metadata = {
  title: 'TippifyNow | Home',
  description: 'Welcome to TPL Trinitypact Limited, a dynamic real estate development company rooted in Lagos, Nigeria.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
