import { GetServerSideProps } from 'next'
import { modulesData } from '@/utils/mindcraft/modulesData'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globalshapersizmirhub.com'

function urlEntry(loc: string, lastmod = new Date().toISOString()) {
  return `
  <url>
    <loc>${SITE_URL.replace(/\/$/, '')}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages = [
    '/',
    '/about',
    '/members',
    '/projects',
    '/contact',
    '/mindcraft-pages/playground',
    '/mindcraft-pages/gallery',
  ]

  const moduleUrls = (modulesData || []).map((m) => `/mindcraft-pages/modules/${m.id}`)
  const urls = [...staticPages, ...moduleUrls]

  const lastmod = new Date().toISOString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((u) => urlEntry(u, lastmod)).join('\n')}
  </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
