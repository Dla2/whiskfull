import Hero from "./components/Hero"
import About from "./components/About"
import Offers from "./components/Offers"
import WhyUs from "./components/WhyUs"
import Testimonials from "./components/Testimonials"
import Cta from "./components/Cta"

function App() {
  const aboutContent = {
    text: 'At Whiskfull, every bite tells a story of passion, craftsmanship, and community. We are a family-owned bakery dedicated to creating delicious pastries and baked goods using the finest locally-sourced ingredients. From our buttery cookies to our artisan breads and indulgent cakes, each treat is made with love and care, bringing the warmth of home to every occasion.',
    text2: "Our mission goes beyond just baking; we’re committed to sustainability and supporting local farmers, ensuring that each ingredient is fresh, sustainable, and responsibly sourced. Whether you're here for a sweet moment of indulgence or celebrating a special occasion, we invite you to experience the joy of Whiskfull—where every pastry is crafted with purpose and a sprinkle of love."
  }
  const heroContent = {
    title: "Whiskfull – Where Comfort Meets Craft in Every Bite",
    text: "Baked with love, crafted with local ingredients, and served with Link sprinkle of joy."
  }
  
  return (
    <>
    <Hero isHome={true} heroContent={heroContent}/>
    <About aboutContent={aboutContent} isHome={true}/>
    <Offers/>
    <WhyUs/>
    <Testimonials/>
    <Cta/>
    </>
  )
}

export default App
