import Image from 'next/image'

// import { Inter } from '@next/font/google'
import styles from './page.css'

// const inter = Inter({ subsets: ['latin'] }) 



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 id="h1">Ticket master</h1>
       
      </div>
    </main>
  )
}