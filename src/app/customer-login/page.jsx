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
//   localStorage.setItem('username', username.value)
//   localStorage.setItem('password', password.value)
// };

export default function customerLogin() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
      
        <form action='/api/customer-login' id='cont1' method='post' 
      //   onSubmit={(e) => {
      //   e.preventDefault();
      //   login();
      // }}
      >

          <h2 id="login1">Customer Login:</h2>
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