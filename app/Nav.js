import React from "react";

export default function Nav() {
  return (
    <div class="nav">
      <ul>
        <li>
          <a href="/" class="nav-link">
            UK
          </a>
        </li>
        <li>
          <a href="/Topmovies" class="nav-link">
            Sports
          </a>
        </li>
        <li>
          <a href="/about" class="nav-link">
            Tech
          </a>
        </li>
        <li>
          <a href="/Interests" class="nav-link">
            Politics
          </a>
        </li>
      </ul>
    </div>
  );
}
