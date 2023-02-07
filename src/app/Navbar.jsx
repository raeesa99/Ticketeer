import React from "react";
import  Link from 'next/link';

export default function Nav() {
  let navLinks;
  let customerLoggedIn = true;
  let sellerLoggedIn = false;

  if (customerLoggedIn) {
    navLinks =
    <>
  <Link href="/my-account" className="nav-link">
    <li>My Account</li>
  </Link>

  <Link href="/logout" className="nav-link">
    <li>Log out</li>
  </Link>
    </>
  } else if (sellerLoggedIn) {
    navLinks =
    <>
  <Link href="/sell-tickets" className="nav-link">
    <li>List an event</li>
  </Link>

  <Link href="/logout" className="nav-link">
    <li>Log out</li>
  </Link>
    </>
  }
  return (
    <>
  <a href="/" className="nav-link">
    <li>Home</li>
  </a>

  <Link href="/sell-tickets" className="nav-link">
    <li>List an event</li>
  </Link>

  <Link href="/customer-login" className="nav-link">
    <li> Customer Login</li>
  </Link>

  <Link href="/seller-login" className="nav-link">
    <li>Event Organiser Login</li>
  </Link>

  <Link href="/customer-register" className="nav-link">
    <li>Customer Sign Up</li>
  </Link>

  <Link href="/seller-register" className="nav-link">
    <li>Event Organiser Sign Up</li>
  </Link>
  {navLinks}
  </>
  )
};