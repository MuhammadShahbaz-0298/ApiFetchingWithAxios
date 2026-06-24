import React, { useEffect, useState } from 'react'
import Details_Ui from '../Components/Details_Ui'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import BikeDetailSkeleton from '../Components/BikeDetailSkeleton';

const DetailsPage = () => {

    const param = useParams();
    const [loading, setLoading] = useState();
    const [bike, setBike] = useState();

    const id = param.id

    const fetchApiData = async () => {
        setLoading(true)
        const response = await axios(`https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes/${id}`);
        console.log(response.data)
        const data = response.data
        console.log(data)
        setBike(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <>
            {loading 
            ? <BikeDetailSkeleton />
            : <Details_Ui bike={bike} />
            }
        </>
    )
}

export default DetailsPage
