import React, { useEffect, useState } from 'react'
import HomePageCard from '../Components/HomePageCard';

const HomePage = () => {
    const [meals, setMeals] = useState([]);

    const fetchApiData = async () => {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await response.json()
        setMeals(data.meals)
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <>
            <h1 className='text-6xl text-center mt-12'>Meals</h1>

            <div className='flex flex-wrap justify-evenly align-middle mt-8 gap-6'>
                {meals.map((m) => {
                  return <HomePageCard meal={m}/>
                })}
            </div>
        </>
    )
}

export default HomePage
