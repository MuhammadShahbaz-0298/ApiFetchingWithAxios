import React from 'react'

const HomePageSkeletonLoader = () => {
  return (
    <>
      <div className="max-w-xs w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 font-sans animate-pulse">
  {/* Image Skeleton */}
  <div className="relative h-40 w-full bg-gray-200">
    {/* Badge Skeleton */}
    <div className="absolute top-2 left-2 h-5 w-16 bg-gray-300 rounded-md"></div>
  </div>
  
  {/* Content Skeleton */}
  <div className="p-4">
    <div className="flex justify-between items-start mb-3">
      <div className="space-y-2 flex-1 mr-4">
        {/* Company Name Skeleton */}
        <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
        {/* Bike Name Skeleton */}
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
      </div>
      {/* CC Tag Skeleton */}
      <div className="h-6 w-14 bg-gray-200 rounded-md"></div>
    </div>
    
    {/* Model Info Skeleton */}
    <div className="h-3 w-1/2 bg-gray-200 rounded mb-5"></div>
    
    {/* Buttons Skeleton */}
    <div className="flex gap-2">
      <div className="flex-1 h-8 bg-gray-200 rounded-lg"></div>
      <div className="flex-1 h-8 bg-gray-200 rounded-lg"></div>
    </div>
  </div>
</div>
    </>
  )
}

export default HomePageSkeletonLoader