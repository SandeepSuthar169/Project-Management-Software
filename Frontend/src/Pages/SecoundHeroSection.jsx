import { ChecksBoxItems } from "../constants/Props.jsx"

function SecoundHeroSection() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Project management made easy
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Manage simple to complex projects and everything <br className="hidden sm:block" />
            in between with FlowBoard <br />
            <span className="font-medium text-gray-800">
              Select what you want to manage:
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ChecksBoxItems.map((CheckBox, index) => {
            const Icon = CheckBox.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <Icon className={`text-xl ${CheckBox.color}`} />
                </div>
                <p className="text-gray-700 font-medium">
                  {CheckBox.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  </section>
  )
}

export default SecoundHeroSection