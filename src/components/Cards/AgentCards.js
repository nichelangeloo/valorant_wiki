import { Link } from 'react-router-dom'

const Cards = ({result, uuid, page}) => {
  return (
    <Link to={`${page}${uuid}`} className="flex items-center flex-col border border-[#ffffffb3] rounded-lg cursor-pointer bg-[#32333d] text-[#ffffffb3] transition duration-200 ease-in-out hover:text-[#ff4656] hover:border-[#ff4656] hover:bg-[#27272fff] hover:scale-105" key={result.id}>
                <img className='h-28 sm:h-56' src={result.displayIcon} alt={result.displayName}/>
                <div className='font-light text-base my-1'>
                    <h1>{result.displayName}</h1>
                </div>
            </Link>
  )
}

export default Cards