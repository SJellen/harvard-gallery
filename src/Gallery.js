import React, { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import './style/Gallery.css'

const apiKEY = process.env.REACT_APP_HARVARD_GALLERY

function Gallery() {

        const [images, setImages] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [page, setPage] = useState(0)
        const [isValid, setValid] = useState(true)
        const [temp, setTemp] = useState(page)

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
                setValid(true)
                setIsLoading(true)
                fetchImages()
                setPage(prevPage => prevPage - 1) 
            }
        }

        function incrementPage() {
            if (page <= 3699) {
                setValid(true)
                setIsLoading(true)
                fetchImages()
                setPage(prevPage => prevPage + 1) 
                
            }        
        }


        


        function handleSearch(event) {
            
            let newPage = parseInt(event.target.value) -1
            
            if (newPage <= 3700) {
                setValid(true)
                setPage(newPage)
            } else {
                setPage(temp)
                setValid(false)
                document.getElementById('input-box-top').value = ''
                document.getElementById('input-box-bottom').value = ''
            }
            
        }

        function handleClick() {
            setTemp(page)
            fetchImages()
            document.getElementById('input-box-top').value = ''
            document.getElementById('input-box-bottom').value = ''

        }

  
            return (

                <div className="gallery" id="home">
                <h2 className="section-title">Image Viewer</h2>
                <div className="button-box" id="button-box-top">
                    {page === 0 ? 
                        <Button variant="contained" disabled onClick={decrementPage}>
                            
                    </Button> :
                    <Button variant="contained" color="primary" onClick={decrementPage} >
                            <ArrowBackIosIcon />
                    </Button>
                    }
                                
                                
                    <span className="current-page">Page: {page + 1}/ 3700</span>

                    {page >= 3699 ? 
                        <Button variant="contained" disabled onClick={incrementPage}>
                            
                    </Button> : 
                    
                    <Button variant="contained" color="primary" onClick={incrementPage}>
                            <ArrowForwardIosIcon />
                    </Button>
                    }
                    </div>
                                
                                
               
                   <input 
                       className="input-box"
                       id="input-box-top"
                       type="number" 
                       min="1"
                       max="3700"
                       placeholder="Enter page number"
                       onChange={handleSearch}
                       maxLength='4'
                       onKeyPress={(e) => e.key === 'Enter' ? handleClick() : null}
                   />
                    <SearchIcon className="search-icon" id="search-icon-top"  onClick={handleClick}/>
                   <p className="search-error" id="search-error-top">{isValid ? '' : "Please enter number under 3700"} </p>
              
                                

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
                   
                 <input 
                       className="input-box"
                       id="input-box-bottom"
                       type="number" 
                       min="1"
                       max="3700"
                       placeholder="Enter page number"
                       onChange={handleSearch}
                       maxLength='4'
                       onKeyPress={(e) => e.key === 'Enter' ? handleClick() : null}
                   />
                    <SearchIcon className="search-icon" id="search-icon-bottom"  onClick={handleClick}/>
                    <p className="search-error" id="search-error-bottom">{isValid ? '' : "Please enter number under 3700"} </p>       
                                
                    

                <div className="button-box" id="button-box-bottom">

                    {page === 0 ? 
                        <Button variant="contained" disabled onClick={decrementPage}>
                            
                    </Button> :
                    <Button variant="contained" color="primary" onClick={decrementPage} >
                            <ArrowBackIosIcon />
                    </Button>
                    }
                    
                    <span className="current-page">Page: {page + 1} / 3700</span>

                    {page >= 3699 ? 
                        <Button variant="contained" disabled onClick={incrementPage}>
                            
                    </Button> : 
                    
                    <Button variant="contained" color="primary" onClick={incrementPage}>
                            <ArrowForwardIosIcon />
                    </Button>
                    }
    
                    </div>
                    
                  
                
                
                </div>
            )

}


export default Gallery