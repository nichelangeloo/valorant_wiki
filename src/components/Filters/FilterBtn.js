const FilterBtn = ({items, setFilterParam}) => {
    // Our filter buttons
  return (
      <div>
          <button 
          onClick={(e) => setFilterParam(e.target.innerHTML)} 
          className='flex justify-center items-center px-3.5 py-2.5 bg-[#32333d] border border-[#ffffffb3] text-[#ffffffb3] rounded-lg font-normal text-base cursor-pointer transition duration-200 ease-in-out hover:text-[#ff4656] hover:border-[#ff4656]'>
              {items}
          </button>
      </div>
  )
}

export default FilterBtn