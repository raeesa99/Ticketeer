'use client'
import styles from './page.css'
import  Link from 'next/link';
// import { useState } from 'react'
import { useState, useEffect } from 'react'

// const inter = Inter({ subsets: ['latin'] })

const sell = async (price,username,event,location,maxcapacity) => {
  let data = await fetch('http://localhost:3000/api/sellertickets', {
    method: 'post',
    headers: {
      'ContentType': 'application/json'
    },
    body: JSON.stringify({
      price,
      username,
      event,
      location,
      maxcapacity,
      // eventID
    })
  });
  //if data.error 
  data = await data.json();
  console.log(data);
};


export default function selling() {

  const [price, setPrice] = useState('');
  const [username, setUsername] = useState('');
  const [event, setEvent] = useState('');
  const [location, setLocation] = useState('');
  const [maxcapacity, setMaxcapacity] = useState('');
  // const [eventID, seteventID] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div>
<form id="cont1" method="post" onSubmit={(e) => {
        e.preventDefault();
        sell(price,username,event,location, maxcapacity);
      }}>

<h2 id='h1'>SELL:</h2>
<div id="box1">

<label htmlFor="price"></label>
<input type="text" id="price" name="price" placeholder="select price" onChange={(e) => setPrice(e.target.value)} />    



<label htmlFor="username"></label>
<input type="text" id="" name="username" placeholder="choose a username..." onChange={(e) => setUsername(e.target.value)} />

<label htmlFor="event"></label>
<input type="text" id="event" name="event" placeholder="select event" onChange={(e) => setEvent(e.target.value)}/>

<label htmlFor="location"></label>
<input type="text" id="location" name="location" placeholder="set location" onChange={(e) => setLocation(e.target.value)}/>

<label htmlFor="maxcapacity"></label>
<input type="text" id="maxcapacity" name="maxcapacity" placeholder="set capacity" onChange={(e) => setMaxcapacity(e.target.value)}/>

{/* <label htmlFor="eventID"></label>
<input type="text" id="eventID" name="eventID" placeholder="" onChange={(e) => setLocation(e.target.value)}/> */}



<input id="submit1" type="submit" value="send" />

<a id="reg" href="http://localhost:3000">login</a>
</div>
</form>
</div>
</main>
  )
}