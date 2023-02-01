import React from "react";
import  Link from 'next/link';

export default function Nav() {
  return (
    <div class="nav">
      <ul>
        <li>
          <a href="/" class="nav-link">
            Login
          </a>
        </li>
        <li>
          <a href="/Topmovies" class="nav-link">
            register
          </a>
        </li>
        <li>
          <a href="/about" class="nav-link">
            account
          </a>
        </li>
        <li>
          <a href="/about" class="nav-link">
          </a>
          <label for="search"></label>
          <input type="text" id="search" name="search" placeholder="search"></input>
        </li>
      </ul>
    </div>
  );
}
