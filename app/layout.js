import './globals.css'
import Nav from "./Nav";
import "./navbar.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <div>
        <Nav/>
      </div> */}

      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav/>
        {children}</body>
    </html>
  )
}
