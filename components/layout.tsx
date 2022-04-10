import type { FC } from "react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>

      <footer>
        {/* // TODO: footer */}
        {/*  */}
      </footer>
    </>
  )
}

export default Layout
