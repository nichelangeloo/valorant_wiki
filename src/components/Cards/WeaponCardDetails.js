import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const WeaponCardDetails = () => {
    const { uuid } = useParams()
    const [fetchedData, setFetchedData] = useState([])

    const {displayName, shopData, displayIcon, weaponStats} = fetchedData

    const API = `https://valorant-api.com/v1/weapons/${uuid}`

    useEffect(() => {   // Fetching data from our API
        (async function() {
          let data = await fetch(API)
          .then(res => res.json())
          setFetchedData(data.data)
        })()
      }, [API])

    
  return (
    <div className='w-4/5 flex justify-center items-center mx-auto flex-col h-[42rem]'>
        <img className='mb-6 h-10 xsm:h-12 sm:h-20 lg:h-32' src={displayIcon} alt={displayName}/>
        <div className='flex justify-center items-center flex-col gap-6 text-center'>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Name:</span> {displayName}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Category:</span> {shopData?.category}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Cost:</span> {shopData?.cost}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Firerate:</span> {weaponStats?.fireRate}/s</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Magazine Size:</span> {weaponStats?.magazineSize}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Reload Time:</span> {weaponStats?.reloadTimeSeconds}s</span>
        {weaponStats?.damageRanges.length === 1 
        ? <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Damage 0m-50m:</span> Head - {weaponStats?.damageRanges[0].headDamage}, Body - {weaponStats?.damageRanges[0].bodyDamage}, Leg - {weaponStats?.damageRanges[0].legDamage}</span>
        : weaponStats?.damageRanges.length === 3
        ?
        <> 
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Damage 0m-8m:</span> Head - {weaponStats?.damageRanges[0].headDamage}, Body - {weaponStats?.damageRanges[0].bodyDamage}, Leg - {weaponStats?.damageRanges[0].legDamage}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Damage 8m-12m:</span> Head - {weaponStats?.damageRanges[1].headDamage}, Body - {weaponStats?.damageRanges[1].bodyDamage}, Leg - {weaponStats?.damageRanges[1].legDamage}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Damage 12m-50m:</span> Head - {weaponStats?.damageRanges[2].headDamage}, Body - {weaponStats?.damageRanges[2].bodyDamage}, Leg - {weaponStats?.damageRanges[2].legDamage}</span>
        </>
        :
        <>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Damage 0m-30m:</span> Head - {weaponStats?.damageRanges[0].headDamage}, Body - {weaponStats?.damageRanges[0].bodyDamage}, Leg - {weaponStats?.damageRanges[0].legDamage}</span>
        <span className='text-[#ffffffb3]'><span className='font-bold uppercase'>Damage 30m-50m:</span> Head - {weaponStats?.damageRanges[1].headDamage}, Body - {weaponStats?.damageRanges[1].bodyDamage}, Leg - {weaponStats?.damageRanges[1].legDamage}</span>
        </> }
        </div>
    </div>
  )
}

export default WeaponCardDetails