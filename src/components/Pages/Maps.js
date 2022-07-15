import { useState, useEffect } from "react"
import Search from "../Search/Search"
import MapsPagination from "../Pagination/MapsPagination"

const Maps = () => {
    const [results, setResults] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [query, setQuery] = useState("")
    const API = 'https://valorant-api.com/v1/maps'

    useEffect(() => {   // Fetching data from API
        (async function () {
            let data = await fetch(API)
            .then((res) => res.json())
            setResults(data.data)
        })()
    }, [API])
  
  // Maps Page
  return (
    <>
    <Search term='map' setCurrentPage={setCurrentPage} setQuery={setQuery} results={results}/>
    <h1 className="text-center font-bold text-3xl my-4 text-[#ffffffb3]">Maps</h1>
    <MapsPagination currentPage={currentPage} setCurrentPage={setCurrentPage} query={query} results={results}/>
    </>
  )
}

export default Maps