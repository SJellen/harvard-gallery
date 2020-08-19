import React, { useState, useEffect } from 'react'
import './style/Video.css'
import Skeleton from '@material-ui/lab/Skeleton';


const apiKEY = process.env.REACT_APP_HARVARD_GALLERY


function Video() {

    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  

    const APIlink = `https://api.harvardartmuseums.org/video/?apikey=${apiKEY}&size=100&`


    const fetchVideo = async () => {
        await fetch(APIlink)
         .then(res => res.json())
         .then(data => setVideos(data.records))
         .catch(error => console.log(error))
         setIsLoading(false)
 } 

    useEffect(() => {
            fetchVideo()  
            // eslint-disable-next-line react-hooks/exhaustive-deps 
        }, [])


       
     

    return (
        <div className="video" id="video">
        <h2 className="section-title">Museum Video Collection</h2>
       
        <div className="video-box">
        {   !isLoading ?
            videos.map((video) => (
                
                
                    <div key={video.videoid} className="video-container">
                    
                    <iframe 
                    src={`https://player.vimeo.com/video/${video.primaryurl.replace("https://vimeo.com/", "")}?title=0&byline=0&portrait=0`}  frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen
                    title={video.description}
                    className="iframe"
                    >
                    </iframe>
                    <div className="video-word-box">
                        <p>{video.description}</p>
                    </div>
                    </div>
            )) : videos.map((video) => (
                        
                        
                        <Skeleton variant="rect" width={500} height={300} key={video.videoid}/>
                        
                    )) 
            
            }


        </div>

        </div>
    )
}


export default Video