import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Manual from './components/Manual'
import Testimonials from './components/Testimonials'
import Privacy from './components/Privacy'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Manual />
        <Testimonials />
        <Privacy />
      </main>
      <Footer />
    </div>
  )
}
