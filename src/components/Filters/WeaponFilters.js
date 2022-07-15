import WeaponCategory from './Category/WeaponCategory'

const WeaponFilters = ({setFilterParam, setCurrentPage}) => {
  return (
    <>
    <div className='text-center font-bold text-3xl mb-4 text-[#ffffffb3]'>Filters</div>
    <WeaponCategory setCurrentPage={setCurrentPage} setFilterParam={setFilterParam}/>
    <button onClick={(e) => setFilterParam('All')} className='flex justify-center items-center my-6 mx-auto px-3.5 py-2.5 bg-[#32333d] border border-[#ffffffb3] text-[#ffffffb3] rounded-lg font-bold text-base cursor-pointer transition duration-200 ease-in-out hover:bg-[#27272fff]'>Clear Filters</button>
    </>
  )
}

export default WeaponFilters