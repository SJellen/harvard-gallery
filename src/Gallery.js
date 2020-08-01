import React, { useState, useEffect} from 'react'



const apiKEY = process.env.REACT_APP_HARVARD_GALLERY



const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}`

function Gallery() {

        const [gallery, setGallery] = useState({})

        useEffect(() => {
            fetch(APIlink)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setGallery(
                      result
                    )
                }
            )
            .catch(error => console.log(error))
        }, [])


        
console.log()


            return (

                <div></div>
            )

}


export default Gallery