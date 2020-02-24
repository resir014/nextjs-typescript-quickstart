import * as React from 'react'
import Head from 'next/head'

interface PageProps {
  title?: string
}

const Page: React.SFC<PageProps> = ({ children, title }) => (
  <div className="root">
    <Head>
      <title>{title || 'Next.js TypeScript Quickstart'}</title>
    </Head>
    {children}
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow-x: hidden;
      }
    `}</style>
  </div>
)

export default Page
