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
        <h1 className='h1'>Welcome to Ticketeer</h1>
        <h2 className='title'>Upcoming Events:</h2>
      {
        tickets.map(ticket =>
            // <Link key={ticket.ticketID} href={{
            //   pathname: '/ordered/' + ticket.id,
            //   query: ticket
            // }}>
            <div className="event">
              <Image src={audience} className="image" width={400}></Image>
              <div className='card'>
                <h2 className='event'>{ticket.event}</h2>
                <p className='price'>£{ticket.price}</p>
                <p className='name'>{ticket.username}</p>
                <p className='location'>Where: {ticket.location}</p>
                <p className='capacity'>Tickets Available: {ticket.maxcapacity}</p>
                </div>
                
                <br></br>
                <Link href="/ordered"><button value="buy">Buy Tickets</button></Link>
            </div>
            // </Link>
            )
      }

      </div>
    </main>
  )
}