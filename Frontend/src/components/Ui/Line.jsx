import  LineItems  from "../constants/Props.jsx"

function Line() {
  return (
    <section className="w-full bg-white py-10">
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
    </section>
  );
}

export default Line;