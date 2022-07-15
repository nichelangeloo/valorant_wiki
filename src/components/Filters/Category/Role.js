import FilterBtn from '../FilterBtn'

const Role = ({setFilterParam}) => {
  const roles = ['Duelist', 'Initiator', 'Controller', 'Sentinel']
  // Agent Categories
  return (
    <div className='flex items-center justify-center gap-6 flex-row flex-wrap mx-4 sm:m-0'> 
        {roles.map((items, index) => (
            <FilterBtn setFilterParam={setFilterParam} key={index} name="role" index={index} items={items}/>
        ))}
    </div>
  )
}

export default Role