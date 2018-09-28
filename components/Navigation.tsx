import * as React from 'react'
import Link from 'next/link'

const Navigation: React.SFC = () => (
  <header>
    <div className="left">▲</div>
    <nav className="right">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        flex-direction: row;
        padding: 0.75rem 1.5rem;
        background-color: black;
        color: white;
      }

      a {
        color: white;
        text-decoration: none;
        margin: 0 0.75rem;
      }

      a:hover,
      a:focus {
        text-decoration: underline;
      }

      a:first-child {
        margin-left: 0;
      }

      a:last-child {
        margin-right: 0;
      }

      .left {
        margin-right: 1.5rem;
      }

      .right {
        flex: 1 1 auto;
      }
    `}</style>
  </header>
)

export default Navigation
