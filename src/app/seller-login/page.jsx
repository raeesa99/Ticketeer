'use client'
import styles from './login.css'
import  Link from 'next/link';
import { useState, useEffect } from 'react'

// const login = async (username, password) => {
//   let data = await fetch('http://localhost:3000/api/customer-login', {
//     method: 'post',
//     headers: {
//       'ContentType': 'application/json'
//     },
//     body: JSON.stringify({
//       username,
//       password
//     })
//   });

//   data = await data.json();
//   console.log(data);
// };

export default function sellerLogin() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
      
        <form action='/api/seller-login' id='cont1' method='post'>
          <h2 id="login1">Seller Login:</h2>
          <div id='box1'>

            <input type="text" id="username" name="username" placeholder="username" />

            <label htmlFor="type"></label>
            <br/>
            <input type="text" id="password" name="password" placeholder="password"/>
            <br/>

            <input type="submit" value="Submit" id ="submit1"/>
            
            {/* <a  id ="reg"href="http://localhost:3000/register">register</a> */}
          </div>
        </form>
      </div>
  </main>
  )
}