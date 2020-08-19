import React, { useState, useEffect } from 'react'
import './style/Audio.css'
import audioObject from './AudioObject'



const apiKEY = process.env.REACT_APP_HARVARD_GALLERY


function Audio() {

    const APIlink = `https://api.harvardartmuseums.org/audio?apikey=${apiKEY}`
    const [isLoading, setIsLoading] = useState(true)
    const [audio, setAudio] = useState([])
   
    

    const fetchAudio = async () => {
        await fetch(APIlink)
         .then(res => res.json())
         .then(data => {
            let audioArr = data.records.filter(file =>  file.primaryurl.includes(".mp3"))
            let newArr = audioArr.map((x,i) => {
                return {sound: x, image: audioObject[i]}
            })
            setAudio(newArr)
            
        })  
         .catch(error => console.log(error))
         setIsLoading(false)

 } 

 


 useEffect(() => {
    fetchAudio()
    
}, [])


   
    return (

        <div className="audio" id="description">
        <h2 className="section-title">Audio Descriptions</h2>
        <div className="audio-box">
     
               <div className="audio-container">

                    {   
                
                    audio.map(i => (

                    <div key={i.sound.fileid}>
                    <img src={i.image.baseimageurl} className="audio-image" key={i.image.id} alt="art piece"/>
                    <div className="sound-box">
                        <div  className="audio-controls">
                            <audio controls>
                            <source src={i.sound.primaryurl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                            </audio> 
                        </div> 
                        <p className="transcript">{i.sound.description}</p> 
                    </div>
                    </div>           
                ) ) 
                            }
               </div>
        
        </div>     
        </div>
    )
}




export default Audio

