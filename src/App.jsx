import { useState, useEffect } from 'react'

import divider from './assets/pattern-divider-desktop.svg'
import divider2 from './assets/pattern-divider-mobile.svg'
import icon from './assets/icon-dice.svg'
import axios from 'axios'


function App() {
  const [advice, setAdvice] = useState('Click for some advice!')
  const [id, setId] = useState('')

  const handleClick = () => {
      axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        setAdvice(res.data.slip.advice)
        setId(res.data.slip.id)
      })
      .catch(err => {
        console.log(err)
      })    
  }


  return (
        <div className="container space-y-4 bg-darkGrayBlue shadow-2xl w-full sm:w-1/2  xl:w-1/3 min-h-fit px-8 py-8 mx-6 sm:px-5 rounded-xl flex flex-col items-center relative">
          <div id="adviceId" className='text-neonGreen font-allText text-md font-bold uppercase'>{`Advice ${id}`}</div>
          <div id="adviceText" className='text-lightCyan font-allText font-bold text-2xl md:text-3xl text-center'>{advice}</div>
          <img className='pb-4' src={divider2} alt='line divider image'/>
          <div
            className='bg-neonGreen flex item-center justify-center px-3 py-3 rounded-full hover:shadow shadow-neonGreen hover:shadow-2xl hover:shadow-neonGreen absolute -bottom-5 transition ease-in-out delay-150'
            onClick={handleClick}
          >
            <img className='w-5 hover:w-6 hover:shadow-2xl' src={icon} alt='dice icon' />
          </div>
        </div>
  )
}

export default App
