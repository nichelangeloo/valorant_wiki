import { useEffect, useState } from "react";
import Filters from "./components/Filters/AgentFilters";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/AgentPagination";
import Search from "./components/Search/Search";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Weapons from "./components/Pages/Weapons";
import Maps from "./components/Pages/Maps";
import AgentCardDetails from "./components/Cards/AgentCardDetails";
import WeaponCardDetails from "./components/Cards/WeaponCardDetails";

function App() {          // Paths to Agents, Weapons and Maps
  return(
    <Router>
      <div className="App">
      <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:uuid" element={<AgentCardDetails/>}/>
        <Route path="/weapons" element={<Weapons/>}/>
        <Route path="/weapons/:uuid" element={<WeaponCardDetails/>}/>
        <Route path="/maps" element={<Maps/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [filterParam, setFilterParam] = useState("All")
  const [query, setQuery] = useState("")
  const API = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

  useEffect(() => {         // Fetching information from API  
    (async function() {
      let data = await fetch(API)
      .then(res => res.json())
      setFetchedData(data.data)
    })()
  }, [API])

  // Main Page
  return (
    <div className="App">
      <Search setCurrentPage={setCurrentPage} setQuery={setQuery} results={fetchedData}/>
      <Filters setCurrentPage={setCurrentPage}  setFilterParam={setFilterParam}/>
      <h1 className="text-center font-bold text-3xl my-4 text-[#ffffffb3]">Agents</h1>
      <Pagination filterParam={filterParam} currentPage={currentPage} setCurrentPage={setCurrentPage} query={query} results={fetchedData}/>
    </div>
  );
}

export default App;
