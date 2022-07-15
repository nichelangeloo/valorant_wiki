import { useEffect, useState } from 'react'
import WeaponFilters from '../Filters/WeaponFilters'
import WeaponPagination from '../Pagination/WeaponPagination'
import Search from '../Search/Search'

const Weapons = () => {
    const [results, setResults] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [filterParam, setFilterParam] = useState("All")
    const [query, setQuery] = useState("")
    const API = 'https://valorant-api.com/v1/weapons'

    useEffect(() => {   // Fetching data from API
        (async function () {
            let data = await fetch(API)
            .then((res) => res.json())
            setResults(data.data)
        })()
    }, [API])

  // Weapons Page
  return (
    <>
    <Search setCurrentPage={setCurrentPage} setQuery={setQuery} results={results}/>
    <WeaponFilters setCurrentPage={setCurrentPage}  setFilterParam={setFilterParam}/>
    <h1 className='text-center font-bold text-3xl my-4 text-[#ffffffb3]'>Weapons</h1>
    <WeaponPagination filterParam={filterParam} currentPage={currentPage} setCurrentPage={setCurrentPage} query={query} results={results}/>
    </>
  )
}

export default Weapons