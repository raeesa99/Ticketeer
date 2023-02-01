import styles from './login.css'
import  Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>  
        <form action='/Login' id='cont1' method='post'>
          <h2 id="login1">Customer Login:</h2>
          <div id='box1'>
            <label for="email">Email:</label>
            <br/>
            <input type="text" id="username" name="person" placeholder="username"/>

            <label for="type">Password:</label>
            <br/>
            <input type="text" id="password" name="type" placeholder="password"/>
            <br/>
            <input type="submit" value="Submit" id ="submit1"/>
            
            {/* <a  id ="reg"href="http://localhost:3000/register">register</a> */}
          </div>
        </form>
      </div>
  </main>
  )
}