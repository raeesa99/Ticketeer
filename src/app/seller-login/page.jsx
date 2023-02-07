'use client'
import styles from './login.css'
import  Link from 'next/link';
import { useState, useEffect } from 'react'

const getUser = async (setUser) => {
  let user = await fetch ('http://localhost:3000/api/hello')

  user = await user.json();
  console.log(user);
  setUser(user);
};

const login = async (text) => {
  let data = await fetch('http://localhost:3000/api/hello', {
    method: 'post',
    headers: {
      'ContentType': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  data = await data.json();
  console.log(data);
};

export default function Login() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
      
        <form action='/my-account' id='cont1' method='post' onSubmit={(e) => {
        e.preventDefault();
        getUser();
      }}>
          <h2 id="login1">Seller Login:</h2>
          <div id='box1'>
            <label htmlFor="email"></label>
            <input type="text" id='email' name="email" placeholder="enter your email address" />
            {/* onChange={(e) => setUserEmail(e.target.value)} */}

            <br/>
            <input type="text" id="username" name="person" placeholder="username" />
            {/* onChange={(e) => setUserUsername(e.target.value)} */}

            <label htmlFor="type"></label>
            <br/>
            <input type="text" id="password" name="type" placeholder="password"/>
            <br/>
            {/* onChange={(e) => setUserPassword(e.target.value)} */}
            <input type="submit" value="Submit" id ="submit1"/>
            
            {/* <a  id ="reg"href="http://localhost:3000/register">register</a> */}
          </div>
        </form>
      </div>
  </main>
  )
}