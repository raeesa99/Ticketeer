import styles from './register.css'
import  Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div>
<form action="/register"  id="cont1" method="post">

<h2 id='h1'>Sign Up:</h2>
<div id="box1">
<label for="username"></label>
<input type="text" id="username" name="username" placeholder="choose a username..."/>

<label for="email"></label>
<input type="text" id="email" name="email" placeholder="enter your email address"/>

<label for="password"></label>
<input type="password" id="password" name="password" placeholder="choose a password..."/>

<input id="submit1" type="submit" />

<a id="reg" href="http://localhost:3000/Login">login</a>
</div>
</form>
</div>
</main>
  )
}