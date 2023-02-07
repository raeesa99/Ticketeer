'use client'
import styles from './/account.css'
import Link from 'next/link'
import Image from 'next/image'
import florence from '/public/florence.jpg'
import jb from '/public/JB.jpg'
import snoop from '/public/snoop.jpg'
import robbie from '/public/robbie.jpg'

export default function MyAccount() {
    return (
        <>
        <div className='container'>
            <div className='upcoming'>
                <h1>Upcoming Events</h1>

                <div className="upcomingCard">
                    <h2>Justin Bieber - Justice World Tour</h2>
                    <h3>4 March 2023</h3>
                    <Image src={jb} className="image"></Image>
                </div>

                
                <div className="upcomingCard">
                    <h2>Snoop Dogg - I Wanna Thank Me Tour</h2>
                    <h3>15 March 2023</h3>
                    <Image src={snoop} className="image"></Image>
                </div>

            </div>


            <div className='past'>
                <h1>Past Events</h1>

                <div className="pastCard">
                    <h2>Florence + the Machine</h2>
                    <h3>3 Feb 2023</h3>
                    <Image src={florence} className="image"></Image>
                </div>

                
                <div className="pastCard">
                    <h2>Robbie Williams</h2>
                    <h3>22 Oct 2022</h3>
                    <Image src={robbie} className="image"></Image>
                </div>
            </div>
        </div>
        </>
    )
}