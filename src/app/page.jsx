'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import  Link from 'next/link';
import audience from '/public/audience.jpg'



// import { Inter } from '@next/font/google'
import styles from './page.css'

// const inter = Inter({ subsets: ['latin'] }) 

const getTickets = async(tickets, setTickets) => {
  let response = await fetch('http://localhost:3000/api/getEvents');

  response = await response.json();
  setTickets(response.results);
  console.log(response);
};


export default function Home() {
  const [tickets, setTickets] = useState([])
  useEffect(() => {getTickets(tickets, setTickets)}, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 id="h1">Ticket master</h1>
       
      {
        tickets.map(ticket =>
            // <Link key={ticket.ticketID} href={{
            //   pathname: '/ordered/' + ticket.id,
            //   query: ticket
            // }}>
            <div className="event">
                <h2 className='event'>{ticket.event}</h2>
                <h2 className='price'>{ticket.price}</h2>
                <h2 className='name'>{ticket.username}</h2>
                <h2 className='location'>{ticket.location}</h2>
                <h2 className='capacity'>{ticket.maxcapacity}</h2>
                <Image src={audience} className="image" width={200}></Image>
                <Link href="/ordered"><button value="buy">Buy Tickets</button></Link>
            </div>
            // </Link>
            )
      }

      </div>
    </main>
  )
}