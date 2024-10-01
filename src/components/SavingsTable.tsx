import { Search, Info, ChevronDown } from 'lucide-react'

const navItems = ['Summary', 'SPs', 'RIs', 'Group buying', 'Anomalies', 'Budget alerts']
const columns = ['Type', 'Term', 'End date', 'Hourly Commitment', 'Instance family', 'Purchaser', 'Status']

export default function SavingsPlanTable() {
    return (
        <div className="bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-[#ffffff10] p-6 rounded-lg shadow-md mb-8">
            <div className="mb-6">
                <nav className="flex space-x-6 border-b border-gray-200 dark:border-gray-700 justify-between">
                    {navItems.map((item, index) => (
                        <button
                            key={item}
                            className={`pb-2 px-1 ${index === 1 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            {item} <Info className="inline-block w-4 h-4 ml-1" />
                        </button>
                    ))}

                    <div className="flex justify-between items-center mb-4">
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 rounded-3xl bg-gray-100 dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                        <button className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                </nav>
            </div>


            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                            {columns.map((column) => (
                                <th key={column} className="pb-2 font-medium text-gray-500 dark:text-gray-400">
                                    {column} <ChevronDown className="inline-block w-4 h-4 ml-1" />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={7} className="py-16 text-center text-gray-500 dark:text-gray-400">
                                100xBoost savings plans will be shown here soon 💡
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}