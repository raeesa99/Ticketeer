import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] }) 

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 id="h1">Ticket master</h1>
       
      </div>
    </main>
  )
}
