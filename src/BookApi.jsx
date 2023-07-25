import { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import MediaPlayer from "./components/MediaPLayer"

function BookApi() {

    const [data, setData] = useState('')
    const [dunes, setDunes] = useState({})

    // const unsplash = createApi({
    //     accessKey: '4RUnynIdDsQTc2U_ONMwd3DoZQ8rzFIsoHeP_EhE3To',
    //     //...other fetch options
    // })

    // unsplash.photos.get(
    //     { photoId: '123' },
    //     // `fetch` options to be sent only with _this_ request
    //     { headers: { 'X-Custom-Header-2': 'bar' } },
    //   );
    
    useEffect(() => {
        getQuotes()
        getDunes()
    }, [])


    async function getQuotes() {
        let url = 'https://api.duniverse.space/v1/random'

        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }

    async function getDunes() {
        //pixabay api
       let key = '38463021-cde25126f1fabc23d02f889dc'
       let url = "https://pixabay.com/api/?key="+key+"&q="+encodeURIComponent('dunes');
        

        const response = await fetch(url)
        const dunes = await response.json()
        setDunes(dunes)
        console.log(dunes.hits[0].webformatURL)

    }

// let image = dunes.hits[0].webformatURL
let styleImage = {
    backgroundImage: `url(https://pixabay.com/get/g2ff84d66e5567a4709db4a8a22f647fd90b86bd34ce5bbe54e6fdf5e0a21254a3bb6ca78eb3f3267bf616f198d7f0b3db2cd93de77380d07f35ebcbdc234f1f2_640.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
} 


  return (
    <div style={styleImage}> 
    <div className='mainfilter'>
    <h1>Welcome to the Dune Universe</h1>
        <p>Dive into the rich lore and explore the books of Dune.</p>
        {/* <img src={dunes.hits[0].webformatURL}  /> */}
        <p>{data.text}</p>
        <MediaPlayer />
    </div>

    </div>
  )
}

export default BookApi