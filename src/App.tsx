import { Footer } from './components/layout/Footer'
import { GlobalNav } from './components/layout/GlobalNav'
import { ProductNav } from './components/layout/ProductNav'
import { useLenis } from './hooks/useLenis'
import { Aperture } from './sections/Aperture'
import { Camera } from './sections/Camera'
import { Design } from './sections/Design'
import { Hero } from './sections/Hero'
import { Highlights } from './sections/Highlights'
import { Tracks } from './sections/Tracks'

export default function App() {
  useLenis()

  return (
    <div className="bg-void min-h-screen">
      <GlobalNav />
      <ProductNav />
      <main>
        <Hero />
        <Tracks />
        <Camera />
        <Aperture />
        <Design />
        <Highlights />
      </main>
      <Footer />
    </div>
  )
}
