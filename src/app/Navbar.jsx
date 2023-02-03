import React from "react";
import  Link from 'next/link';

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        
        if (customerLoggedIn) {

          <Link href="/myaccount" className="nav-link">
            <li>My Account</li>
          <Link>

          <Link href="/logout" className="nav-link">
            <li>Log out</li>
          </Link>
      } else if (eventUserLoggedIn) {
          <>
          <Link href="/sellTickets" className="nav-link">
            <li>List an event</li>
          </Link>

          <Link href="/logout" className="nav-link">
              <li>Log out</li>
            </Link>
          </>
      }

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
            <li>Customer Sign Up</li>
          </Link>

          <Link href="/register" className="nav-link">
            <li>Event Organiser Sign Up</li>
          </Link>

      </ul>
    </div>
  );
};
