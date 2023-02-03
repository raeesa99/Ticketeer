import React from "react";
import  Link from 'next/link';

export default function Nav() {
  return (
    <div className="nav">
      <ul>

          <a href="/" className="nav-link">
            <li>Home</li>
          </a>
        
          <Link href="/customer-login" className="nav-link">
            <li> Customer Login</li>
          </Link>
        
          <Link href="/seller-login" className="nav-link">
            <li>Event Organiser Login</li>
          </Link>

          <Link href="/register" className="nav-link">
            <li>Sign Up</li>
          </Link>
        
        {/* <li>
          <label for="search"></label>
          <input type="text" id="search" name="search" placeholder="search"></input>
        </li> */}
      </ul>
    </div>
  );
}
