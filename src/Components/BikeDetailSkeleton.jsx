const BikeDetailSkeleton = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-pulse">
            {/* Hero Image */}
            <div className="relative">
                <div className="w-full h-80 bg-gray-200" />

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                    <div className="w-24 h-10 bg-gray-300 rounded-lg" />
                </div>

                {/* Company Badge */}
                <div className="absolute bottom-4 left-4">
                    <div className="w-28 h-8 bg-gray-300 rounded-md" />
                </div>
            </div>

            <div className="p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div>
                        <div className="h-10 w-64 bg-gray-300 rounded mb-3" />
                        <div className="h-4 w-32 bg-gray-200 rounded" />
                    </div>

                    <div className="w-32 h-12 bg-gray-200 rounded-lg" />
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-4 rounded-xl"
                        >
                            <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
                            <div className="h-5 w-20 bg-gray-300 rounded" />
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="mb-8">
                    <div className="h-7 w-40 bg-gray-300 rounded mb-4" />

                    <div className="space-y-3">
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-5/6 bg-gray-200 rounded" />
                        <div className="h-4 w-4/6 bg-gray-200 rounded" />
                    </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                    <div className="h-7 w-36 bg-gray-300 rounded mb-4" />

                    <div className="grid md:grid-cols-2 gap-3">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="h-12 bg-slate-100 rounded-lg"
                            />
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 h-12 bg-gray-200 rounded-xl" />
                    <div className="flex-1 h-12 bg-gray-300 rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default BikeDetailSkeleton;