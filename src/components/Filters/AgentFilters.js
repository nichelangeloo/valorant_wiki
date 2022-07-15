import Role from './Category/Role'

const Filters = ({setFilterParam, setCurrentPage}) => {
  return (
    <>
    <div className='text-center font-bold text-3xl mb-4 text-[#ffffffb3]'>Filters</div>
    <Role setCurrentPage={setCurrentPage} setFilterParam={setFilterParam}/>
    <button onClick={(e) => setFilterParam('All')} 
    className='flex justify-center items-center my-6 mx-auto px-3.5 py-2.5 bg-[#32333d] border border-[#ffffffb3] text-[#ffffffb3] rounded-lg font-bold text-base cursor-pointer transition duration-200 ease-in-out hover:bg-[#27272fff]'>Clear Filters</button>
    </>
  )
}

export default Filters