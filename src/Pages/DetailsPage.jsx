import React, { useEffect, useState } from 'react'
import Details_Ui from '../Components/Details_Ui'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import BikeDetailSkeleton from '../Components/BikeDetailSkeleton';

const DetailsPage = ({
    loading,
    bike,
    setBike,
    setLoading,
    fetchApiData
}) => {

    const { id } = useParams();

    useEffect(() => {
        fetchApiData(id)
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
