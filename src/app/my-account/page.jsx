'use client'
import styles from './account.css'
import  Link from 'next/link';
import Image from 'next/image'
// import florence from '../public/florence.jpg'

// const myImage = (props) => {
//     return 
// }

export default function MyAccount() {
    return (
        <>
        
        <div className='upcoming'>
            <h1>Upcoming Events</h1>

            <div id="upcomingCard">
                <h2>Florence + the Machine</h2>
                <h3>3 Feb 2023</h3>
                {/* <div className=''>

                <img src={florence} alt="florence_and_the_machine" width="50" height="50"></img>
                </div> */}
            </div>
        </div>


        <div className='past'>
            <h1>Past Events</h1>
        </div>
        
        </>
    )
}