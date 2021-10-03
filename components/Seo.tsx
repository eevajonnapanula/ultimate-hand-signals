import Head from "next/head"
import React from "react"

interface SeoProps {
  title?: string
}

const Seo = ({ title = "Ultimaten käsimerkit" }: SeoProps) => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default Seo
