const MapCards = ({result}) => {
  return (
    <div className="flex items-center flex-col border border-[#ffffffb3] rounded-lg bg-[#32333d] text-[#ffffffb3]" key={result.id}>
    <img className='h-32 xsm:h-44 sm:h-96 rounded-lg' src={result.splash} alt={result.displayName}/>
    <div className='font-light text-xl my-1'>
        <h1>{result.displayName}</h1>
    </div>
</div>
  )
}

export default MapCards