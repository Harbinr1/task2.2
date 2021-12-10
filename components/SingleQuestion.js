import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import "../components/styles.scss"
import {BsPersonCircle} from 'react-icons/bs'

const SingleQuestion = ({title,info}) => {

    const [showInfo, setShowInfo] = useState(false);
    return (
        <div>
        <div className='questions'>
         <header className='inline'>
           <BsPersonCircle/>
               {title}
             
             <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                 {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
             </button>
             
         </header>
         {showInfo && <p className='answer'>{info}</p>}
        </div>
        </div>
    )
}

export default SingleQuestion
