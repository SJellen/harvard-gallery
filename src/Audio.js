import React, { useState, useEffect } from 'react'
import './style/Audio.css'
import audioObject from './AudioObject'
import Skeleton from '@material-ui/lab/Skeleton';


const apiKEY = process.env.REACT_APP_HARVARD_GALLERY


function Audio() {

    const APIlink = `https://api.harvardartmuseums.org/audio?apikey=${apiKEY}`

    const [isLoading, setIsLoading] = useState(true)
    const [audio, setAudio] = useState([])
    // const [image, setImage] = useState([])
    

    const fetchAudio = async () => {
        await fetch(APIlink)
         .then(res => res.json())
         .then(data => setAudio(data.records.filter(file =>  file.primaryurl.includes(".mp3"))))
         .catch(error => console.log(error))
         
         setIsLoading(false)

 } 

 


 useEffect(() => {
    fetchAudio()
    // setImage(audioObject)
}, [])


    
   
   
    // const objects = [{audio: audio, image: image}]
    // console.log(objects[0].image[0])

   console.log(audioObject)

  let imageArr = audioObject.map(i => (
                                <div className="object-container"><img src={[i.baseimageurl]}  className="audio-object"/></div>))
    return (

        <div className="audio">
        <h2 className="section-title">Audio Visual Descriptions</h2>


                


        <div className="audio-box">


                <div className="test">
                        <div className="image-container">
                            {imageArr}
                        </div>
                       
               <div className="audio-container">
                    

                    {   
                           
                                audio.map(sound => (

                                    <div className="sound-box">
                                    
                                        <div key={sound.fileid} className="audio-controls">
                                            <audio controls>
                                            <source src={sound.primaryurl} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                            </audio> 
                                        </div> 
                                        <p className="transcript">{sound.description}</p> 

                                    </div>
                                        
                            ) ) 
                            }
               </div>
                           




                </div>
                
        </div>
            
        </div>
    )
}




export default Audio

