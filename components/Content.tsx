import * as React from 'react'

const Content: React.SFC = ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        flex: 1;
        padding: 1.5rem;
      }
    `}</style>
  </main>
)

export default Content
