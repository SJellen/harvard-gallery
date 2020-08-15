import React, { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';


const apiKEY = process.env.REACT_APP_HARVARD_GALLERY

function Gallery() {

        const [images, setImages] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [page, setPage] = useState(0)
        const [tempPage, setTempPage] = useState(null)
        const [pagePlusOne, setPagePlusOne] = useState(page + 1)
        const [pagePlusTwo, setPagePlusTwo] = useState(page + 2)

        const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}&page=${page}&size=100`

        const fetchImages = async () => {
               await fetch(APIlink)
                .then(res => res.json())
                .then(data => setImages(data.records))
                .catch(error => console.log(error))
                setIsLoading(false)
        } 

        useEffect(() => {
                fetchImages()   
            }, [])

        function decrementPage() {
          
            if (page >= 1 ) {
                
                setIsLoading(true)
                fetchImages()
                setPage(page -1) 
                 
            }
        }

        function incrementPage() {
            if (page <= 3699) {
                  
                setIsLoading(true)
                fetchImages()
                setPage(page +1)  
                
            }        
        }


        

        function handleChange(e) {
            setTempPage(e.target.value)
        }

        function handleSubmit(e) {
            e.preventDefault()  
            fetchImages()
        }

        function handleClick() {
            setPage(tempPage) 
            setPagePlusOne(tempPage)
            let plusTwo = tempPage
            setPagePlusTwo(plusTwo + 2)
        }



        console.log(page)
       console.log(tempPage)
       console.log(page + 2)
      
       console.log(pagePlusOne)
        
           
            return (

                <div className="gallery">
                <h2 className="section-title">Havard Art Images</h2>
                <div className="button-box" id="button-box-top">
                                {page === 0 ? 
                                    <Button variant="contained" disabled onClick={decrementPage}>
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button> :
                                <Button variant="contained" color="primary" onClick={decrementPage} >
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button>
                                }
                                
                                
                                <span className="current-page">Page: {page + 1}/ 3700</span>

                                {page >= 3699 ? 
                                    <Button variant="contained" disabled onClick={incrementPage}>
                                        {''}
                                </Button> : 
                                
                                <Button variant="contained" color="primary" onClick={incrementPage}>
                                        {page === 3701 ? '' : page === 3700 ? page + 1 : page + 2}
                                </Button>
                                }
                                </div>
                                <form >
                                   <input 
                                    className="input-box"
                                    id="input-box-top"
                                    type="number" 
                                    min="1"
                                    max="3700"
                                    placeholder="Enter page number"
                                    
                                /> 
                                
                                
                                </form>
                                

                <div className="image-box">
                        {!isLoading ? images.map(image => (
                        <div key={image.fileid}>
                            <img src={image.baseimageurl} alt="art piece" className="gallery-image"/>
                        </div>   
                    )) : images.map((image) => (
                        <Skeleton variant="rect" width={175} height={200} key={image.fileid}/>
                    ))
                    
                    }
                </div>
                   
                                <form onSubmit={handleSubmit}>
                                   <input 
                                    className="input-box"
                                    id="input-box-bottom"
                                    type="number" 
                                    min="1"
                                    max="3700"
                                    value={tempPage}
                                    placeholder="Enter page number"
                                    onChange={handleChange}
                                /> 
                                <button type="submit" value="submit"  onClick={handleClick}>submit</button>
                                
                                
                                </form>
                                
                                
                    

                <div className="button-box" id="button-box-bottom">

                                {page === 0 ? 
                                    <Button variant="contained" disabled onClick={decrementPage}>
                                        {page === 0 ? '' : page === 1 ? page  : page}
                                </Button> :
                                <Button variant="contained" color="primary" onClick={decrementPage} >
                                        {page === 0 ? '' : page === 1 ? page  : page }
                                </Button>
                                }
                                
                                <span className="current-page">Page: {page + 1} / 3700</span>

                                {page >= 3699 ? 
                                    <Button variant="contained" disabled onClick={incrementPage}>
                                        {''}
                                </Button> : 
                                
                                <Button variant="contained" color="primary" onClick={incrementPage}>
                                        {page === 3701 ? '' : page === 3700 ? page + 1 : page + 2}
                                </Button>
                                }
                
                                </div>
                    
                  
                
                
                </div>
            )

}


export default Gallery