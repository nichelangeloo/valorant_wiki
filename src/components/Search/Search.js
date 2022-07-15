const Search = ({setQuery, setCurrentPage}) => {    // Our search bar
  return (
    <form className='text-center'>
        <input
        placeholder = 'Type your query...'
        type="text" 
        className="shadow w-4/5 sm:w-2/5 h-7 rounded-lg pl-3 text-[#000] focus:outline-none focus:outline-[#ff4656] my-6"
        onChange={(e) => { // Getting our query for filtration by searching
          setCurrentPage(0)
          setQuery(e.target.value)
        }
        } />
    </form>
  )
}

export default Search