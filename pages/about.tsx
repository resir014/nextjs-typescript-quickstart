import * as React from 'react'
import Link from 'next/link'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import relativeTime from 'utils/relativeTime'

const lastUpdated = '2018-09-25T19:30:01+07:00'

export default () => (
  <Page title="About | Next.js TypeScript Quickstart">
    <Navigation />
    <Content>
      <h1 className="title">About us.</h1>
      <p>
        Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo sensus hilaretur. Nam, ut sint illa vendibiliora, haec
        uberiora certe sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers?
      </p>
      <p>
        Last updated: <time dateTime={lastUpdated}>{relativeTime(new Date(lastUpdated))}</time> |{' '}
        <Link href="/" passHref>
          <a>Return home</a>
        </Link>
      </p>
    </Content>
    <style jsx>{`
      .title {
        margin-top: 0;
      }
    `}</style>
  </Page>
)
