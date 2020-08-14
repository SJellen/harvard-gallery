import React, { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';

const apiKEY = process.env.REACT_APP_HARVARD_GALLERY





function Gallery() {

        const [images, setImages] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [page, setPage] = useState(0)

        const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}&page=${page}`

        const fetchImages = async () => {
               await fetch(APIlink)
                .then(res => res.json())
                .then(data => setImages(data.records))
                .catch(error => console.log(error))
                
        } 


        useEffect(() => {
                
                
                fetchImages()
                setIsLoading(false)
                
            }, [])



              
        

        

        


        console.log(page)

        function decrementPage() {
            if (page >= 1 ) {
                setPage(page -1)
                fetchImages()
                 
            }
        }

        function incrementPage() {
            if (page <= 36999) {
                setPage(page +1)
                fetchImages()
            }
                
                
                
                
                 
        }
                

           
            return (

                <div className="gallery">
                <div className="button-box" id="button-box-top">
                                {page === 0 ? 
                                    <Button variant="contained" disabled onClick={decrementPage}>
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button> :
                                <Button variant="contained" color="primary" onClick={decrementPage} >
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button>
                                }
                                
                                <span className="current-page">Page: {page + 1}/ 37000</span>

                                {page >= 36999 ? 
                                    <Button variant="contained" disabled onClick={incrementPage}>
                                        {''}
                                </Button> : 
                                
                                <Button variant="contained" color="primary" onClick={incrementPage}>
                                        {page === 37001 ? '' : page === 37000 ? page + 1 : page + 2}
                                </Button>
                                }
                                
                
                                </div>

                <div className="image-box">
                        {images.map(image => (
                        <div key={image.fileid}>
                            <img src={image.baseimageurl} alt="art piece" className="gallery-image"/>
                        </div>   
                    ))}
                </div>

                <div className="button-box" id="button-box-bottom">

                                {page === 0 ? 
                                    <Button variant="contained" disabled onClick={decrementPage}>
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button> :
                                <Button variant="contained" color="primary" onClick={decrementPage} >
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button>
                                }
                                
                                <span className="current-page">Page: {page + 1}/ 37000</span>

                                {page >= 36999 ? 
                                    <Button variant="contained" disabled onClick={incrementPage}>
                                        {''}
                                </Button> : 
                                
                                <Button variant="contained" color="primary" onClick={incrementPage}>
                                        {page === 37001 ? '' : page === 37000 ? page + 1 : page + 2}
                                </Button>
                                }
                
                                </div>
                    
                  
                
                
                </div>
            )

}


export default Gallery