import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = 'DEMO+KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {

  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()

    setApod({
      "date": "2023-0629",
      "explanation": "Monitoring 68 pulsars with very large radio telescopes, the North America",
      "hdurl": "https://apod.nasa.gov/apod/image/2306/Gwb_nanograv_3000_annotated.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Massage from the Gravitational Universe",
      "url": "https://apod.nasa.gov/apod/image/2306/Gwb_annotated.jpg"

    })

  }, [])
  return (
    <p>
      {apod.explanation}
    </p>
  )


  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}
export default App
