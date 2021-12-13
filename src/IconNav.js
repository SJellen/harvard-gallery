import React, {useContext} from 'react'
import { Context } from './Context'

export default function IconNav() {
    
    const {currentImage} = useContext(Context)

    return (
        <div className="iconNav-container" style={{display: currentImage !== undefined ? 'none' : ''}}>
            <a 
                href="#home" 
                className="iconNav-icon" 
                style={{fill: "black"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/></svg>
            </a>
            <a 
                href="#video" 
                className="iconNav-icon" 
                style={{fill: "black"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <a 
                href="#description" 
                className="iconNav-icon" 
                style={{fill: "black"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 23v-11c-4.036 0-6 2.715-6 5.5 0 2.807 1.995 5.5 6 5.5zm18-5.5c0-2.785-1.964-5.5-6-5.5v11c4.005 0 6-2.693 6-5.5zm-12-13.522c-3.879-.008-6.861 2.349-7.743 6.195-.751.145-1.479.385-2.161.716.629-5.501 4.319-9.889 9.904-9.889 5.589 0 9.29 4.389 9.916 9.896-.684-.334-1.415-.575-2.169-.721-.881-3.85-3.867-6.205-7.747-6.197z"/></svg>
            </a>
        </div>
    )
}