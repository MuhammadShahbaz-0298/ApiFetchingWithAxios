import React from 'react'

const HomePageCard = ({meal}) => {
    console.log(meal)
    return (
        <>
        <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 font-sans">
  {/* Image with Quick Badges */}
  <div className="relative h-40 w-full">
    <img
      src={meal.strMealThumb}
      alt="Flan"
      className="w-full h-full object-cover"
    />
    <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-500 text-white rounded-md shadow">
      {meal.strArea}
    </span>
  </div>
  {/* Content */}
  <div className="p-4">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-xl font-bold text-gray-900">{meal.strMeal}</h2>
      <span className="text-xs text-gray-500 font-medium">{meal.strCategory}</span>
    </div>
    {/* Micro Ingredient List */}
    <p className="text-xs text-gray-500 line-clamp-2 mb-4">
      <span className="font-semibold text-gray-700">Ingredients:</span> 
      {meal.strIngredient1},{meal.strIngredient2},{meal.strIngredient3},{meal.strIngredient4} <strong>....</strong>
    </p>
    {/* Action Buttons */}
    <div className="flex gap-2">
      <a
        href={meal.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium py-2 rounded-lg transition-colors"
      >
        Video
      </a>
      <a
        href={meal.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium py-2 rounded-lg transition-colors"
      >
        Recipe
      </a>
    </div>
  </div>
</div>


        </>
    )
}

export default HomePageCard
