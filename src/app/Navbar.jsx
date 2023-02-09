'use client'
import React from "react";
import  Link from 'next/link';
import { useState, useEffect } from "react";

export default function Nav() {
  // let [navLinks, setNavLinks] = useState(<></>);
  // let loginType;
  // useEffect(() => {
  //   // Perform localStorage action
  //   loginType = localStorage.getItem('type')
  // }, [])

  // if (loginType == 'customer') {
  //   setNavLinks(
  //   <>
  // <Link href="/my-account" className="nav-link">
  //   <li>My Account</li>
  // </Link>

  // <Link href="/logout" className="nav-link">
  //   <li>Log out</li>
  // </Link>
  //   </>
  //   )
  // } else if (loginType == 'seller') {
  //   setNavLinks(
  //   <>
  // <Link href="/sell-tickets" className="nav-link">
  //   <li>List an event</li>
  // </Link>

  // <Link href="/logout" className="nav-link">
  //   <li>Log out</li>
  // </Link>
  //   </>
  //   )
  // }
  return (
    <nav className="navbar">
      <ul>
          <>
        <a href="/" className="nav-link">
          <li>Home</li>
        </a>

        {/* <Link href="/sell-tickets" className="nav-link">
          <li>List an event</li>
        </Link> */}

        <Link href="/my-account" className="nav-link">
          <li>My Account</li>
        </Link>

        <Link href="/customer-login" className="nav-link">
          <li> Customer Login</li>
        </Link>

        <Link href="/seller-login" className="nav-link">
          <li>Organiser Login</li>
        </Link>

        <Link href="/customer-register" className="nav-link">
          <li>Customer Register</li>
        </Link>

        <Link href="/seller-register" className="nav-link">
          <li>Organiser Register</li>
        </Link>

        <Link href="/sell-tickets" className="nav-link">
          <li>List Event</li>
        </Link>

        <Link href="/" className="nav-link">
          <li>Logout</li>
        </Link>

        {/* {navLinks} */}
        </>
  </ul>
  </nav>
  )
};