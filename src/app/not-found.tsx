import Link from 'next/link'
export default function NotFound() {
  return (
    <section className="bg-brand-light py-28 text-center">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="font-heading text-6xl font-bold text-brand-navy">404</h1>
        <p className="mt-4 text-lg text-brand-dark/80">That page took a detour. Let us route you back.</p>
        <Link href="/" className="mt-8 inline-block rounded-md bg-brand-orange px-8 py-3 font-heading font-bold text-white hover:bg-orange-600 transition-colors">Back to Home</Link>
      </div>
    </section>
  )
}
