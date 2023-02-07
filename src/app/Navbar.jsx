import React from "react";
import  Link from 'next/link';


export default function Nav() {
  let navLinks;
  let customerLoggedIn = false;
  let sellerLoggedIn = false;

  if (customerLoggedIn) {
    navLinks =
    <>
        <Link href="/myaccount" class="nav-link">
          <li>My Account</li>
        </Link>

        <Link href="/logout" class="nav-link">
          <li>Log out</li>
        </Link>
    </>
  } else if (sellerLoggedIn) {
    navLinks =
    <>
      <Link href="/sellTickets" classN="nav-link">
            <li>List an event</li>
          </Link>

      <Link href="/logout" class="nav-link">
              <li>Log out</li>
            </Link>
    </>
  }
  else {
    <>
    <Link href="/customer-login" class="nav-link">
    <li> Customer Login</li>
  </Link>

  <Link href="/seller-login" class="nav-link">
    <li>Event Organiser Login</li>
  </Link>

  <Link href="/register" class="nav-link">
    <li>Customer Sign Up</li>
  </Link>

  <Link href="/register" class="nav-link">
    <li>Event Organiser Sign Up</li>
  </Link>
  </>
  }
  return (
    <>
              <div class="nav">
      <ul>
        <li>
          <a href="/Login" class="nav-link">
            Login
          </a>
        </li>
        <li>
          <a href="/register" class="nav-link">
            register
          </a>
        </li>
        <li>
          <a href="/" class="nav-link">
            Home 
          </a>
        </li>
      </ul>
    </div>
      
    </>
  );
};
