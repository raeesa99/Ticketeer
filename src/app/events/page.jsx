'use client'
import styles from './events.css'
import  Link from 'next/link';
// import { useState } from 'react'
import { useState, useEffect } from 'react'

export default function events() {
    return (
        <main className={styles.main}>
          <div className={styles.description}>
            <h1 id="h1">All Upcoming Events</h1>
          </div>
        </main>
      )
}
    
