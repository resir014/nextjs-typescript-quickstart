import * as React from 'react'
import Link from 'next/link'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import relativeTime from 'utils/relativeTime'

const lastUpdated = '2015-01-25T07:25:15+07:00'

export default () => (
  <Page>
    <Navigation />
    <Content>
      <h1 className="title">Hello world.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe non potest. Negabat igitur ullam esse artem, quae ipsa a se
        proficisceretur; Duo Reges: constructio interrete. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Non igitur
        bene. Vide, quaeso, rectumne sit.
      </p>
      <p>
        Last updated: <time dateTime={lastUpdated}>{relativeTime(new Date(lastUpdated))}</time> |{' '}
        <Link href="/about" passHref>
          <a>About</a>
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
