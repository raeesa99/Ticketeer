'use client'
import styles from './register.css'
import  Link from 'next/link';
// import { useState } from 'react'
import { useState, useEffect } from 'react'
import { User } from 'models/customer'

// const inter = Inter({ subsets: ['latin'] })

const register = async (text) => {
  let data = await fetch('http://localhost:3000/api/createUser', {
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
  //if data.error 
  data = await data.json();
  console.log(data);
};

// const Home = ({data}) => {
//     const updateMacros = async () => {
//       const res = await fetch('http://localhost:3000/api/daily', {
//         method: 'post',
//         body: JSON.stringify(results)
//       })
//     }}

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div>
<form action="/register"  id="cont1" method="post" onSubmit={(e) => {
        e.preventDefault();
        getUser(user);
      }}>

<h2 id='h1'>Sign Up:</h2>
<div id="box1">
<label for="username"></label>
<input type="text" id="username" name="username" placeholder="choose a username..." onChange={(e) => setUserEmail(e.target.value)}/>

<label for="email"></label>
<input type="text" id="email" name="email" placeholder="enter your email address" onChange={(e) => setUserUsername(e.target.value)}/>

<label for="password"></label>
<input type="password" id="password" name="password" placeholder="choose a password..." onChange={(e) => setUserPassword(e.target.value)}/>

<input id="submit1" type="submit" />

<a id="reg" href="http://localhost:3000/Login">login</a>
</div>
</form>
</div>
</main>
  )
}