import React, {useContext} from 'react'
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import './style/Gallery.css'
import {Context} from './Context'
import Magnifier from "react-magnifier"


export default function Gallery() {

    const {page, decrementPage, incrementPage, handleSearch, handleImageClick, handleClick, isValid, isLoading, images, currentImage } = useContext(Context)

  
  
            return (

                <div className="gallery" id="home">
                <h2 className="section-title" style={{display: currentImage !== undefined ? 'none' : ''}}>Museum Image Viewer</h2>

                <div style={{display: currentImage !== undefined ? 'none' : ''}}>
                    <div className="button-box" id="button-box-top" >
                    {page === 0 ? 
                        <Button variant="contained" disabled onClick={decrementPage} aria-label="back page">
                            
                    </Button> :
                    <Button variant="contained" color="primary" onClick={decrementPage}  aria-label="back page">
                            <ArrowBackIosIcon />
                    </Button>
                    }
                                            
                    <span className="current-page">{page + 1}/ 14800</span>

                    {page >= 14799 ? 
                        <Button variant="contained" disabled onClick={incrementPage} aria-label="forward page">
                            
                    </Button> : 
                    
                    <Button variant="contained" color="primary" onClick={incrementPage} aria-label="forward page">
                            <ArrowForwardIosIcon />
                    </Button>
                    }
                    </div>            
               
                   <input 
                       className="input-box"
                       id="input-box-top"
                       type="number" 
                       min="1"
                       max="14800"
                       placeholder="Enter page number"
                       onChange={handleSearch}
                       maxLength='4'
                       onKeyPress={(e) => e.key === 'Enter' ? handleClick() : null}
                   />
                    <SearchIcon className="search-icon" id="search-icon-top"  onClick={handleClick}/>
                   <p className="search-error" id="search-error-top">{isValid ? '' : "Please enter number under 14800"} </p>
                </div>
                
              
                <div className="image-box">
                        {!isLoading ? images.map(image => (
                        <div key={image.fileid} >
                            {currentImage?.src !== image.baseimageurl ?
                            <img src={image.baseimageurl} alt="art piece" className={currentImage && currentImage?.src === image.baseimageurl ? "gallery-imageCurrent" : currentImage && currentImage?.src !== image.baseimageurl ? "gallery-none" : 'gallery-image'} onClick={(e) => handleImageClick(e)} /> :
                            <Magnifier src={image.baseimageurl} onClick={(e) => handleImageClick(e)} className={currentImage && currentImage?.src === image.baseimageurl ? "gallery-imageCurrent" : currentImage && currentImage?.src !== image.baseimageurl ? "gallery-none" : 'gallery-image'}/>
                            }
                            
                            
                        </div>   
                    )) : <h1>Loading....</h1>
                    
                    }
                </div>

                </div>
            )

}


