import ReactPaginate from "react-paginate"
import WeaponCards from "../Cards/WeaponCards"

const WeaponPagination = ({results, query, currentPage, setCurrentPage, filterParam}) => {
    const PER_PAGE = 8  // How many items per page
    const offset = currentPage * PER_PAGE // Slicing items per page
    
    const currentPageData =   // All our data that is going to be on the page
    results
    .filter(result => {   // Filtering by category
      if(result.shopData?.category === filterParam) {
        return result
      } else if(filterParam === 'All') {
        return result
      }
      return false
    })
    .filter(result => {   // Filtering by search
      if (query === '') {
        return result
      } else if(result.displayName.toLowerCase().includes(query.toLowerCase())) {
        return result
      }
      return false
    })
    .slice(offset, offset + PER_PAGE)
    .map((result, id) => {    // Passing our filtration and slicing into component
        const { uuid } = result
        return(
            <WeaponCards uuid={uuid} page="/weapons/" key={id} result={result}/>
        )
    })

    const pageCount = Math.ceil(results     // Calculating how many pages there are
      .filter(result => {     // Filtration by category
        if(result.shopData?.category === filterParam) {
          return result
        } else if(filterParam === 'All') {
          return result
        }
        return false
      })
      .filter((result) => {   // Filtration by search
      if (query === "") {
        return result
      } else if (
        result.displayName.toLowerCase().includes(query.toLowerCase())
      ) {
        return result
      }
      return false
    })
    .length / PER_PAGE)

    function handlePageClick({ selected: selectedPage }) {  // What happens after selecting a page
        setCurrentPage(selectedPage);
    }

  return (
    <>
      <div className='flex flex-wrap justify-center align-center gap-6 mx-4 sm:m-0'>
      {currentPageData}
      </div>
    <ReactPaginate
    className='flex list-none justify-center items-center cursor-pointer gap-3 sm:gap-6 my-6 text-[#ffffffb3]'
    pageCount={pageCount}
    forcePage={currentPage}
    nextLabel='Next'
    nextLinkClassName='p-2.5 hover:text-[#ff4656]'
    nextClassName='next-item'
    previousLinkClassName='p-2.5 hover:text-[#ff4656]'
    previousClassName='prev-item'
    pageClassName='page-item'
    pageLinkClassName='p-2.5 hover:text-[#ff4656]'
    activeLinkClassName='text-[#ff4656] border-b-2 border-[#ff4656]'
    activeClassName='active-item'
    onPageChange={handlePageClick}
    previousLabel='Prev'/>
    </>
  )
}

export default WeaponPagination