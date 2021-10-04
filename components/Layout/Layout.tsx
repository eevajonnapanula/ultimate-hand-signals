import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>
  title?: string | JSX.Element
}

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  return (
    <>
      <Seo title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
