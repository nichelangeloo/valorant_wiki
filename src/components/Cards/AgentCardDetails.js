import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const { uuid } = useParams()
    const [fetchedData, setFetchedData] = useState([])

    const {displayName, description, fullPortrait, abilities} = fetchedData

    const API = `https://valorant-api.com/v1/agents/${uuid}`

    useEffect(() => {     // Fetching our data from API
        (async function() {
          let data = await fetch(API)
          .then(res => res.json())
          setFetchedData(data.data)
        })()
      }, [API])

    
  return (
    <div className='w-4/5 flex justify-center items-center my-4 mx-auto flex-col xl:flex-row'>
        <img className='h-56 xsm:h-80 mb-6 sm:mb-0 sm:h-[42rem]' src={fullPortrait} alt={displayName}/>
        <div className='flex justify-center align-start flex-col'>
        <span className='mb-3.5 text-[#ffffffb3]'><span className='font-bold uppercase'>Name:</span> {displayName}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Description:</span> {description}</span>
        {abilities?.map((ability) => {
            return (
                    ability.displayIcon ?
                    <div className='flex items-center justify-center gap-6 mt-6' key={ability.description}> 
                    <img className='h-20' src={ability.displayIcon} alt={ability.displayName}/> 
                    <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>{ability.displayName}:</span> {ability.description}</span>
                    </div>
                    : 
                    <div className='flex items-center justify-center gap-6 mt-6' key={ability.description}>
                    <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>{ability.displayName}:</span> {ability.description}</span>
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default CardDetails