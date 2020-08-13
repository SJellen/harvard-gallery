import React, { useState, useEffect} from 'react'



const apiKEY = process.env.REACT_APP_HARVARD_GALLERY





function Gallery() {

        const [images, setImages] = useState([])
        
        const [page, setPage] = useState(0)

        const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}&page=${page}`

        useEffect(() => {
                fetchImages()    
            }, [])



        const fetchImages = async () => {
               await fetch(APIlink)
                .then(res => res.json())
                .then(data => setImages(data.records))
                .catch(error => console.log(error))
        }       
        

        

        


        console.log(images[0])


                

           
            return (

                <div className="gallery">
                    {images.map(image => (
                        <div key={image.fileid}>
                            <img src={image.baseimageurl} alt="art piece" className="gallery-image"/>
                        </div>
                    ))}
                  
                </div>
            )

}


export default Gallery