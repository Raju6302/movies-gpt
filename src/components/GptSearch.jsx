import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
    <div >
      <div className='absolute -z-10'>
        <img alt='background-image' src={BACKGROUND_IMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
