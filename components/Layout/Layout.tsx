import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
