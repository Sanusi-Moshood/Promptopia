import Navbar from '@components/Navbar'
import Provider from '@components/Provider'
import '@styles/globals.css'
import { Children } from 'react'

export const metadata = {
    title: 'Promtopia',
    description: 'discover and share Ai prompts'

}

const Layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
<Provider>
<div className="main">
                <div className="gradient"></div>
            </div>
  
            <main className="app">
            <Navbar/>
                {children}
            </main>
</Provider>
        </body>
    </html>
  )
}
export default Layout