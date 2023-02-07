'use client'
import styles from './login.css'
import  Link from 'next/link';
// import { useState } from 'react'
import { useState, useEffect } from 'react'

// const inter = Inter({ subsets: ['latin'] })

const login = async (username, password) => {
  let data = await fetch('http://localhost:3000/api/eventUser', {
    method: 'post',
    headers: {
      'ContentType': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  //if data.error 
  data = await data.json();
  console.log(data);
};


export default function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div>
<form id="cont1" method="post" onSubmit={(e) => {
        e.preventDefault();
        login(username, password);
      }}>

<h2 id='h1'>Event Organiser Signup:</h2>
<div id="box1">
<label htmlFor="username"></label>
<input type="text" id="username" name="username" placeholder="enter username..." onChange={(e) => setUsername(e.target.value)} />

<label htmlFor="password"></label>
<input type="password" id="password" name="password" placeholder="enter password..." onChange={(e) => setPassword(e.target.value)}/>

<input id="submit1" type="submit" value="send" />

<a id="reg" href="http://localhost:3000"></a>
</div>
</form>
</div>
</main>
  )
}