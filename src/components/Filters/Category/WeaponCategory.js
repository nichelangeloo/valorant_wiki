import FilterBtn from '../FilterBtn'

const WeaponCategory = ({setFilterParam}) => {
  const category = ['Heavy Weapons', 'Rifles', 'Shotguns', 'Pistols', 'Sniper Rifles', 'SMGs']
  // Weapon Categories
  return (
    <div className='flex items-center justify-center gap-6 flex-wrap mx-4 sm:m-0'>
        {category.map((items, index) => (
            <FilterBtn setFilterParam={setFilterParam} key={index} name="role" index={index} items={items}/>
        ))}
    </div>
  )
}

export default WeaponCategory