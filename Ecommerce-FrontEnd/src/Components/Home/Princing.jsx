import { useState } from "react"

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const features = [
    "Invoice generation",
    "Track charges and expenses",
    "Profit calculation & stats",
    "Supplier and product management",
    "SWOT analysis for products",
    "Client management",
    "Bill reminders"
  ]
  const price = isYearly ? 90 : 9
  const period = isYearly ? "year" : "month"

  return (
    <>
      <div id="pricing" className="flex justify-center items-center flex-col py-10 max-sm:px-3">
        <p className="recursive-style font-semibold text-orange-600">Pricing</p>
        <div className="recursive-mainTitle max-sm:text-4xl max-sm:w-full text-4xl text-center lg:mt-10">
          <p className="max-sm:w-full">
            Streamline Your Business Finances, Track Spending, and
            <span className="bg-orange-600 text-lime-50 mx-2 px-2 whitespace-nowrap max-sm:whitespace-normal leading-relaxed">
              Maximize Profitability
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center  items-center flex-col py-10 max-sm:px-2">
        <div className="w-full max-w-md mx-auto rounded-lg border-4">
          <div className="p-6">

            <div className="flex items-center justify-center gap-4 p-1 mb-8 bg-gray-50 rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={`w-6/12 py-2 rounded-full text-sm font-medium transition-colors ${!isYearly ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`w-6/12 py-2 rounded-full text-sm max-sm:w-7/12  font-medium transition-colors flex justify-center items-center gap-2 ${isYearly ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
              >
                Yearly
                <span className="px-2 py-1 text-xs font-semibold rounded bg-red-50 text-red-600 hover:bg-red-50">
                  2 months free
                </span>
              </button>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold">${price}</span>
                <span className="text-gray-500">/{period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 text-gray-500">•</div>
                  <span className="text-gray-900">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <button className="px-5 py-4 rounded-lg bg-orange-600 hover:shadow-xl text-lime-50  text-lg">
                Try WinnerFast for <span className="underline ml-1">free for 7 days</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
