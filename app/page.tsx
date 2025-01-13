import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

