import React, {useState, useEffect} from 'react'


const Context = React.createContext()

const apiKEY = process.env.REACT_APP_HARVARD_GALLERY


function ContextProvider({ children}) {


    const [images, setImages] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [page, setPage] = useState(0)
        const [isValid, setValid] = useState(true)
        const [temp, setTemp] = useState(page)
        const APIlink = `https://api.harvardartmuseums.org/image?apikey=${apiKEY}&page=${page}&size=25`

        const [currentImage, setCurrentImage] = useState()

        const fetchImages = async () => {
               await fetch(APIlink)
                .then(res => res.json())
                .then(data => setImages(data.records))
                .catch(error => console.log(error))
                setIsLoading(false)
        } 

        useEffect(() => {
                fetchImages() 
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])

        useEffect(() => {
            fetchImages() 
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [page])

        function decrementPage() {
          
            if (page >= 1 ) {
                setValid(true)
                setIsLoading(true)
                setPage(prevPage => prevPage - 1) 
                // fetchImages()
                
            }
        }

        function incrementPage() {
            if (page <= 14799) {
                setValid(true)
                setIsLoading(true)
                setPage(prevPage => prevPage + 1) 
                // fetchImages()
                
                
            }        
        }

        function handleSearch(event) {
            
            let newPage = parseInt(event.target.value) -1
            
            if (newPage <= 14800) {
                setValid(true)
                setPage(newPage)
            } else {
                setPage(temp)
                setValid(false)
                document.getElementById('input-box-top').value = ''
                
            }    
        }

        function handleClick() {
            
            setTemp(page)
            fetchImages()
            document.getElementById('input-box-top').value = ''
            
        }

        function handleImageClick(e) {
            if (e.target !== currentImage) {
                setCurrentImage(e.target)
            } else {
                setCurrentImage()
            }
            

        }
    




    return (
        <Context.Provider value={{page, decrementPage, incrementPage, handleSearch, handleImageClick, handleClick, isValid, isLoading, images, currentImage }} >
            { children }
        </Context.Provider>
    )
}

export { ContextProvider, Context}