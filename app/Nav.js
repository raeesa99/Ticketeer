import React from "react";
import  Link from 'next/link';

export default function Nav() {
  return (
    <div class="nav">
      <ul>
        
          <Link href="/login" class="nav-link">
            <li>Login</li>
          </Link>
        
        
          <Link href="/Topmovies" class="nav-link">
            <li>register</li>
          </Link>
        
        
          <Link href="/about" class="nav-link">
            <li>account</li>
          </Link>
        
        {/* <li>
          <label for="search"></label>
          <input type="text" id="search" name="search" placeholder="search"></input>
        </li> */}
      </ul>
    </div>
  );
}
