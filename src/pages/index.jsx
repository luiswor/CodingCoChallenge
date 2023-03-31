import { Lenis } from '@studio-freight/react-lenis'
import Layout from '@/components/layouts/Layout'

import Header from "@/components/generals/header"
import Footer from "@/components/generals/footer"
import Hero from "@/components/blocks/hero"
import AboutSection from "@/components/blocks/aboutsection"
import NewsSection from "@/components/blocks/newssection"
import ContactSection from "@/components/blocks/contactsection"
import MyMarquee from '@/components/blocks/MyMarquee'
import Utils from '@/components/generals/Utils'

export default function Home() {
  const options = {  
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  }
  return (
    <Lenis root options={{...options}}>
      <Layout>
        <Header/>
        <Hero/>
        <AboutSection/>
        <MyMarquee type="first"/>
        <NewsSection/>
        <MyMarquee type="second"/>
        <ContactSection/>
        <Footer></Footer>
        <Utils></Utils>
      </Layout>
    </Lenis>
  )
}
