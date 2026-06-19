import React, { useEffect, useState } from 'react'
import HomePageCard from '../Components/HomePageCard';
import axios from 'axios';
import HomePageSkeletonLoader from '../Components/HomePageSkeletonLoader';

const HomePage = () => {
    // const [meals, setMeals] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(false);

    // const fetchApiData = async () => {
    //     let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    //     const data = await response.json()
    //     setMeals(data.meals)
    // }

    const fetchApiData = async () => {
        setLoading(true)
        const response = await axios("https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes");
        console.log(response.data)
        const data = response.data
        setBikes(data)
        setLoading(false)
    }


    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <>
            <h1 className='text-6xl text-center mt-12'>Bikes</h1>
            {loading
                ?
                <div className='flex flex-wrap justify-evenly align-middle mt-8 gap-6'>
                    {[1, 2, 3, 4, 5, 6].map((_,index) => {
                       return <HomePageSkeletonLoader key={index} />
                    })}
                </div>
                :
                <div className='flex flex-wrap justify-evenly align-middle mt-8 gap-6'>
                    {bikes.map((b, index) => {
                        return <HomePageCard bike={b} key={index} />
                    })}
                </div>
            }
        </>
    )
}

export default HomePage
