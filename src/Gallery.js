import React, { useState, useEffect} from 'react'



const apiKEY = process.env.REACT_APP_HARVARD_GALLERY





function Gallery() {

        const [images, setImages] = useState({
            fileid: '',
            baseimageurl: ''
        })
        
        const [page, setPage] = useState()

        const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}&page=${page}`

       
        function fetchImages()  {
                fetch(APIlink)
                .then(res => res.json())
                .then(
                    
                    (data) => data.records.map((image) => {
                        
                        setImages({ fileid: image.fileid, baseimageurl: image.baseimageurl})
                        
                        
                        
                    })) 
                
                .catch(error => console.log(error))
        }       
        

        useEffect(() => {
               fetchImages()    
        }, [])

        


        console.log(images)


                

           
            return (

                <div>
                    <h1>{}</h1>
                    {/* <img /> */}
                    {/* <img src={images.baseimageurl}/>
                    {images.map(({ fileid, baseimageurl}) => {
                        return (
                            <img src={images.baseimageurl}/>
                        )
                    })} */}
                </div>
            )

}


export default Gallery