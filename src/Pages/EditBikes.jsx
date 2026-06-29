import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBikes = ({
  companyName,
  bikeName,
  model,
  engineCapacity,
  price,
  image,
  loading,
  setCompanyName,
  setBikeName,
  setModel,
  setEngineCapacity,
  setPrice,
  setImage,
  setLoading,
  fetchApiData,
  PostData
}) => {

  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    fetchApiData(id)
  }, [])


  const handleOnSubmit = (e) => {
    PostData(e, id)
    Navigate(`/detail/${id}`)
  }

  return (
    <>
      <form onSubmit={(e) => handleOnSubmit(e)} className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-default-medium font-sans">
        {/* Form Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-heading">Edit Bike</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Company Name */}
          <div>
            <label htmlFor="companyname" className="block mb-2 text-sm font-semibold text-heading">
              Company Name
            </label>
            <input
              type="text"
              id="companyname"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body/60 outline-none transition-all"
              placeholder="e.g., Yamaha, Honda"
              required
            />
          </div>

          {/* Bike Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-heading">
              Bike Name
            </label>
            <input
              type="text"
              id="name"
              value={bikeName}
              onChange={(e) => setBikeName(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body/60 outline-none transition-all"
              placeholder="e.g., YZF-R6, Civic"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label htmlFor="model" className="block mb-2 text-sm font-semibold text-heading">
              Model Year / Trim
            </label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body/60 outline-none transition-all"
              placeholder="e.g., 2024 SE, 2022 Race"
              required
            />
          </div>

          {/* CC */}
          <div>
            <label htmlFor="cc" className="block mb-2 text-sm font-semibold text-heading">
              Engine Capacity (CC)
            </label>
            <input
              type="number"
              id="cc"
              value={engineCapacity}
              onChange={(e) => setEngineCapacity(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body/60 outline-none transition-all"
              placeholder="e.g., 599"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-semibold text-heading">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body/60 outline-none transition-all"
              placeholder="e.g., 12699"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-semibold text-heading">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body/60 outline-none transition-all"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-400 text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-3 focus:outline-none transition-colors cursor-pointer"
        >
          Submit Listing
        </button>
      </form>
    </>
  )
}

export default EditBikes