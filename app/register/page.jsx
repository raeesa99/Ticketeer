import styles from './register.css'
import  Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div>
      <form action="/signup" method="post">

<h2>CREATE AN ACCOUNT</h2>  

<label for="username">User Name:</label>
<input type="text" name="username" placeholder="choose a username..."/>
<br/>
<label for="email">Email:</label>
<input type="text" name="email" placeholder="enter your email address"/>
<br/>
<label for="password">Password:</label>
<input type="password" name="password" placeholder="choose a password..."/>
<br/>
<input id="signupButton" type="submit" value="Sign me up!"/>
<br/>
<p>if you already have an existing account, please <a id="redirect" href="/login">log in</a></p>
</form>
{/* <p class="error">{{ error }}</p> */}
      </div>
</main>
  )
}