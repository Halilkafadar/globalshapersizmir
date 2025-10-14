import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'
import { Fragment } from 'react'

function simpleMarkdownToHtml(md: string) {
  // Small converter for headings, unordered and ordered lists, and paragraphs.
  let html = md
    .replace(/^###\s+(.*)$/gim, '<h4>$1</h4>')
    .replace(/^##\s+(.*)$/gim, '<h3>$1</h3>')
    .replace(/^#\s+(.*)$/gim, '<h2>$1</h2>')
    // ordered lists: 1. item
    .replace(/^\s*\d+\.\s+(.*)$/gim, '<li>$1</li>')
    // unordered lists: - item
    .replace(/^\s*-\s+(.*)$/gim, '<li>$1</li>')
  // wrap consecutive <li> into <ul>
  html = html.replace(/(<li>.*?<\/li>)(\s*<li>.*?<\/li>)+/gs, (match) => {
    const items = match.match(/<li>.*?<\/li>/gs) || []
    return '<ul>' + items.join('') + '</ul>'
  })
  // paragraphs: split on two or more newlines
  html = html.split(/\n\s*\n/).map(p => p.trim()).map(p => p ? `<p>${p}</p>` : '').join('')
  return html
}

export default function CurriculumPage() {
  const project = projects.find(p => p.slug === 'financial-literacy')!
  const html = simpleMarkdownToHtml(project.longDescription)

  return (
    <>
      <Head>
        <title>{project.title} — Curriculum</title>
        <meta name="description" content={`Curriculum and modules: ${project.title}`} />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-4xl font-bold text-gs-navy">{project.title} — Curriculum</h1>
              <a href="/files/MeryemileBirikiminSirriwatermarked2025.pdf" className="inline-flex items-center gap-2 btn-primary" target="_blank" rel="noreferrer">Download PDF <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10l4-4"/></svg></a>
            </div>

            <div className="prose lg:prose-xl text-gray-700" dangerouslySetInnerHTML={{ __html: html.replace(/\n/g, '<br/>') }} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
