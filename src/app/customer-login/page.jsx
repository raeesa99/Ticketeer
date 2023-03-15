'use client'
import styles from './login.css'

export default function customerLogin() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
      
        <form action='/api/customer-login' id='cont1' method='post' 
      >
          <h2 id="login1">Customer Login:</h2>
          <div id='box1'>

            <input type="text" id="username" name="username" placeholder="username" />

            <label htmlFor="type"></label>
            <br/>
            <input type="text" id="password" name="password" placeholder="password"/>
            <br/>
            <input type="submit" value="Submit" id ="submit1"/>
          </div>
        </form>
      </div>
  </main>
  )
}