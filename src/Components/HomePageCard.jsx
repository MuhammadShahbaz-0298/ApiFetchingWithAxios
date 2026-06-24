import React from 'react'
import { Link } from 'react-router-dom'

const HomePageCard = ({ bike }) => {
  return (
    <>
      <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 font-sans">
  {/* Image with Price Tag */}
  <div className="relative h-40 w-full bg-gray-100">
    <img
      src={bike.image}
      alt={`${bike.companyname} ${bike.name}`}
      className="w-full h-full object-cover"
    />
    <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-bold bg-slate-900 text-white rounded-md shadow">
      {bike.price}
    </span>
  </div>
  
  {/* Content */}
  <div className="p-4">
    <div className="flex justify-between items-start mb-1">
      <div>
        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
          {bike.companyname}
        </span>
        <h2 className="text-xl font-bold text-gray-900 leading-tight">
          {bike.name}
        </h2>
      </div>
      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md font-semibold whitespace-nowrap">
        {bike.cc} cc
      </span>
    </div>
    
    {/* Model Info */}
    <p className="text-xs text-gray-500 mb-4">
      <span className="font-semibold text-gray-700">Model:</span> {bike.model}
    </p>
    
    {/* Action Buttons */}
    <div className="flex gap-2">
      <Link
        to={`/detail/${bike.id}`}
        type="button"
        className="flex-1 text-center bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium py-2 rounded-lg transition-colors border border-slate-200"
      >
        Details
      </Link>
      <button
        type="button"
        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded-lg transition-colors"
      >
        Inquire
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default HomePageCard
