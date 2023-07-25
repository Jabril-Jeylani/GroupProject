import Navbar from "../components/Navbar"
import { DuneContext } from "../DuneContext"
import BookApi from "../BookApi"

import Footer from "../components/Footer"




function HomePage() {


    
  return (
    <div>
        <Navbar />
        
        <BookApi />
       
        <Footer/>
       
    </div>
  )
}

export default HomePage