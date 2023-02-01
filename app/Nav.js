import React from "react";
import  Link from 'next/link';

export default function Nav() {
  return (
    <div class="nav">
      <ul>

          <a href="/" class="nav-link">
            <li>Home</li>
          </a>
        
          <Link href="/customer-login" class="nav-link">
            <li> Customer Login</li>
          </Link>
        
          <Link href="/seller-login" class="nav-link">
            <li>Event Organiser Login</li>
          </Link>

          <Link href="/register" class="nav-link">
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
