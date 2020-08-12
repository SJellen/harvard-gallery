import React, { useState, useEffect} from 'react'



const apiKEY = process.env.REACT_APP_HARVARD_GALLERY



const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}`

function Gallery() {

        const [gallery, setGallery] = useState({

            date: '',
            imageid: '',
            copyright: '',
            caption: '',
            description: '',
            imageURL: ''


        })

        useEffect(() => {
            fetch(APIlink)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setGallery({
                        date: result.records[0].date,
                        imageid: result.records[0].imageid,
                        copyright: result.records[0].copyright,
                        caption: result.records[0].caption,
                        description: result.records[0].description,
                        imageURL: result.records[0].baseimageurl
                    })
                }
            )
            .catch(error => console.log(error))
        }, [])


        
console.log(gallery.imageURL)

            
            return (

                <div>
                    <img src={gallery.imageURL} />

                </div>
            )

}


export default Gallery