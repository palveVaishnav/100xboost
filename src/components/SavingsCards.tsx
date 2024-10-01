export default function SavingsCards() {
    return (
        <div className="flex flex-col gap-4 justify-around">
            <div className="bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10] hover:bg-blue-400 thover:text-white transition-all duration-900 cursor-pointer ease-in-out p-2 rounded-lg hover:shadow-2xl group hover:-translate-y-1">
                <h3 className="text-md font-semibold mb-2">Total Savings</h3>
                <p className="text-2xl font-bold">$10,724</p>
                <p className="text-sm mt-2 text-green-500 group-hover:text-red-100">+Saving 100x continously</p>
            </div>
            <div className="bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10] hover:bg-blue-400 thover:text-white transition-all duration-900 cursor-pointer ease-in-out p-2 rounded-lg hover:shadow-2xl group hover:-translate-y-1">
                <h3 className="text-md font-semibold mb-2">Savings Last Year</h3>
                <p className="text-2xl font-bold">$1,724</p>
                <p className="text-sm mt-2 text-green-500 group-hover:text-red-100">+Save 100x this Year</p>
            </div>
            <div className="bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10] hover:bg-blue-400 thover:text-white transition-all duration-900 cursor-pointer ease-in-out p-2 rounded-lg hover:shadow-2xl group hover:-translate-y-1">
                <h3 className="text-md font-semibold mb-2">Savings Last Month</h3>
                <p className="text-2xl font-bold">$724</p>
                <p className="text-sm mt-2 text-green-500 group-hover:text-red-100">-Spend 100x less this month</p>
            </div>
            <div className="bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10] hover:bg-blue-400 thover:text-white transition-all duration-900 cursor-pointer ease-in-out p-2 rounded-lg hover:shadow-2xl group hover:-translate-y-1">
                <h3 className="text-md font-semibold mb-2">Savings Last Week</h3>
                <p className="text-2xl font-bold">$224</p>
                <p className="text-sm mt-2 text-green-500 group-hover:text-red-100">+Save Everyday</p>
            </div>
            <div className="bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10] hover:bg-blue-400 thover:text-white transition-all duration-900 cursor-pointer ease-in-out p-2 rounded-lg hover:shadow-2xl group hover:-translate-y-1">
                <h3 className="text-md font-semibold mb-2">Savings Forcast this year</h3>
                <p className="text-2xl font-bold">$20024</p>
                <p className="text-sm mt-2 text-green-500 group-hover:text-red-100">+Future Savings</p>
            </div>
        </div>
    )
}