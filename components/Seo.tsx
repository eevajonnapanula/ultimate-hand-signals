import Head from 'next/head'
import React from 'react'

interface SeoProps {
  title?: string | JSX.Element
}

const Seo = ({ title = 'Ultimaten käsimerkit' }: SeoProps): JSX.Element => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default Seo
