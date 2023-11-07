import Image from 'next/image'
import styles from './page.module.css'
import Navigation from './components/Navigation/Navigation'
import SpecialBanner from './components/Marquee/SpecialBanner'

export default function Home() {
  return (
    <main >
      <Navigation/>
      <SpecialBanner/>
    </main>
  )
}
