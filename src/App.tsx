import './index.css'
import Header from './components/Header/Header'
import Hero from './components/Hero'
import Services from './components/Services/Services'
import Statistics from './components/Statistics/Statistics'
import About from './components/About'
import Team from './components/Team/Team'
import Testimonials from './components/Testimonials/Testimonials'
import Reasons from './components/Reasons/Reasons'
import Portfolio from './components/Portfolio/Portfolio'
import Pricing from './components/Pricing/Pricing'
import Blog from './components/Blog/Blog'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <div className='bg-purple-900'>
      <Header/>
      <Hero/>
      <Services/>
      <Statistics/>
      <About/>
      <Team></Team>
      <Testimonials/>
      <Reasons/>
      <Portfolio/>
      <Pricing/>
      <Blog/>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App