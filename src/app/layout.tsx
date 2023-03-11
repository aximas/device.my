import './globals.scss'
import Header from '@//components/Header/Header'

export const metadata = {
    title: 'Device information',
    description: 'Your device API'
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div className="wrapper">
            <Header/>
            {children}
        </div>
        </body>
        </html>
    )
}
