import { Footer } from './components/layout/Footer'
import { GlobalNav } from './components/layout/GlobalNav'
import { ProductNav } from './components/layout/ProductNav'
import { useLenis } from './hooks/useLenis'
import { Accessories } from './sections/Accessories'
import { Aperture } from './sections/Aperture'
import { Assistant } from './sections/Assistant'
import { Battery } from './sections/Battery'
import { Camera } from './sections/Camera'
import { Comparison } from './sections/Comparison'
import { Connectivity } from './sections/Connectivity'
import { ControlGrid } from './sections/ControlGrid'
import { Cooling } from './sections/Cooling'
import { Design } from './sections/Design'
import { Family } from './sections/Family'
import { Hero } from './sections/Hero'
import { Highlights } from './sections/Highlights'
import { Performance } from './sections/Performance'
import { Shopping } from './sections/Shopping'
import { Software } from './sections/Software'
import { Tracks } from './sections/Tracks'
import { Values } from './sections/Values'
import { Video } from './sections/Video'

export default function App() {
  useLenis()

  return (
    <div className="bg-void">
      <GlobalNav />
      <ProductNav />
      <main>
        <Hero />
        <Tracks />
        <Design />

        <Camera />
        <Aperture />
        <ControlGrid />
        <Video />
        <Battery />
        <Performance />
        <Cooling />
        <Comparison />
        <Family />
        <Assistant />
        <Software />
        <Connectivity />
        <Accessories />
        <Shopping />
        <Values />
        <Highlights />
      </main>
      <Footer />

    </div>
  )
}
