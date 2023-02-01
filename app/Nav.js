import React from "react";
import  Link from 'next/link';

export default function Nav() {
  return (
    <div class="nav">
      <ul>
        
          <Link href="/login" class="nav-link">
            <li>Login</li>
          </Link>
        
        
          <Link href="/register" class="nav-link">
            <li>register</li>
          </Link>
        
        
          <Link href="/useraccount" class="nav-link">
            <li>Buyer account</li>
          </Link>

          <Link href="/selleraccount" class="nav-link">
            <li>Seller account</li>
          </Link>

          <a href="/" class="nav-link">
            <li>Home</li>
          </a>
        
        {/* <li>
          <label for="search"></label>
          <input type="text" id="search" name="search" placeholder="search"></input>
        </li> */}
      </ul>
    </div>
  );
}
