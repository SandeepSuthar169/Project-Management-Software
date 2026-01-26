import  { LineItems }  from "../constants/Props.jsx"

function Line() {
  return (
    <div className="w-full py-10">
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {LineItems.map((line, index) => {
                        const Icon = line.icon
                        return (
                            <div key={index}
                            className="flex items-center gap-4 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <Icon className={`text-4xl ${line.color}`}/> 
                            <p className="text-lg font-medium text-gray-700">{line.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="bg-amber-100 py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="flex justify-center items-center order-2 lg:order-2">
                        <img
                            src="images\Screenshot 2026-01-20 234526.png"
                            alt="ToDos"
                            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain rounded-lg shadow-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            To Do gives you focus, from Project to play with team
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            Your projects may be complex, but your project management tools don't have to be. Combine a rich set of features with flexibility, simplicity, and ease of use to deliver complex projects quickly, while creating meaningful experiences for your customers.
                        </p>
                    </div>

                    
                </div>
            </div>
        </div>
        <div className="bg-amber-100 py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="flex justify-center items-center order-2 lg:order-1">
                    <img
                        src="images\6bad5eb3-1ac9-4b58-b243-8ba4bb857af5-cover-2494198440.png"
                        alt="ToDos"
                        className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain rounded-lg shadow-lg"
                    />
                    </div>

                    <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            To Do gives you focus, from Project to play with team
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            Your projects may be complex, but your project management tools don't have to be. Combine a rich set of features with flexibility, simplicity, and ease of use to deliver complex projects quickly, while creating meaningful experiences for your customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-amber-100 py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="flex justify-center items-center order-2 lg:order-2">
                        <img
                            src="images\31d9f5146032943.62a90b5607ef2.jpg"
                            alt="ToDos"
                            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain rounded-lg shadow-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            To Do gives you focus, from Project to play with team
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            Your projects may be complex, but your project management tools don't have to be. Combine a rich set of features with flexibility, simplicity, and ease of use to deliver complex projects quickly, while creating meaningful experiences for your customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Line;