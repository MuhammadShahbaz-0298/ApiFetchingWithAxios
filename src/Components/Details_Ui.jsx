import React from 'react'
import { Link } from 'react-router-dom'

const Details_Ui = ({ bike }) => {
    return (
        <>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Hero Section */}
                <div className="relative">
                    <img
                        src={bike?.image}
                        alt={`${bike?.companyname} ${bike?.name}`}
                        className="w-full h-80 object-cover"
                    />

                    <div className="absolute top-4 left-4">
                        <span className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                            {bike?.price}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-md text-sm font-semibold text-slate-700">
                            {bike?.companyname}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Title */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">
                                {bike?.name}
                            </h1>
                            <p className="text-gray-500 mt-1">
                                Model Year: {bike?.model}
                            </p>
                        </div>

                        <div className="bg-slate-100 px-4 py-2 rounded-lg">
                            <span className="text-slate-700 font-semibold">
                                {bike?.cc} CC Engine
                            </span>
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs text-gray-500">Engine</p>
                            <h3 className="font-semibold text-slate-900">
                                {bike?.cc} CC
                            </h3>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs text-gray-500">Company</p>
                            <h3 className="font-semibold text-slate-900">
                                {bike?.companyname}
                            </h3>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs text-gray-500">Model</p>
                            <h3 className="font-semibold text-slate-900">
                                {bike?.model}
                            </h3>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs text-gray-500">Price</p>
                            <h3 className="font-semibold text-slate-900">
                                {bike?.price}
                            </h3>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            Description
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {bike?.description ||
                                "This motorcycle delivers excellent performance, fuel efficiency, and comfort. Designed for both city rides and long-distance journeys with a reliable engine and modern styling."}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            Key Features
                        </h2>

                        <ul className="grid md:grid-cols-2 gap-3">
                            <li className="bg-slate-50 p-3 rounded-lg">
                                ✓ Fuel Efficient Engine
                            </li>
                            <li className="bg-slate-50 p-3 rounded-lg">
                                ✓ Comfortable Seating
                            </li>
                            <li className="bg-slate-50 p-3 rounded-lg">
                                ✓ Digital Meter
                            </li>
                            <li className="bg-slate-50 p-3 rounded-lg">
                                ✓ Reliable Performance
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            type="button"
                            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-medium transition"
                        >
                            Back
                        </button>

                        <Link
                            to={`/edit/${bike?.id}`}
                            type="button"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition text-center"
                        >
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details_Ui
