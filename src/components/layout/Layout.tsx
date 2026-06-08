import type { ReactNode } from 'react'
// import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.css'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
