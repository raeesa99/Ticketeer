import styles from './login.css'
import  Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 id="h1">bob</h1>
      </div>
      <div>
      <form action="/login" method="post">
        <h2>LOG IN</h2>
      <input type="text" name="username" placeholder="enter your username..."/>
        <label for="username">User Name:</label>
        <br/>
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="enter your email address"/>
<br/>
    <label for="password">Password:</label>
    <input type="password" name="password" placeholder="enter your password..."/>
<br/>
    <input id="signupButton" type="submit" value="Log me in!"/>
<br/>
  <p>if you do not have an account, please <a href="/signup">sign up</a> first</p>
      </form>
      </div>
{/* <p class="error">{{ error }}</p> */}
    </main>
  )
}