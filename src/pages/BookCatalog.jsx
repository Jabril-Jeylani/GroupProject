import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom'
import { DuneContext } from "../DuneContext"
import DuneBooks from "./DuneBooks";



function BookCatalog() {
  return (
    <div>
        <Navbar />
        <DuneBooks/>
    </div>
  )
}

export default BookCatalog