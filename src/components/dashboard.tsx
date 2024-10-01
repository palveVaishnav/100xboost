"use client"
import { useState } from 'react'
import { Search, Sun, Moon, Bell } from 'lucide-react'
import SavingsPlanTable from './SavingsTable'
import { SavingsChart } from './SavingsChart'
import SideNav from './SideNav'
import SavingsCards from './SavingsCards'
import Image from 'next/image'

export const profileImage = "https://i.pravatar.cc/300"

export default function Dashboard() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            <div className="flex bg-gray-100 dark:bg-gradient-to-tr from-[#000] to-[#262724] text-gray-800 dark:text-gray-200 max-h-screen relative ">
                {/* Sidebar */}
                <SideNav />

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-scroll sticky">
                    <header className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-2xl font-bold">Dashboard</h1>
                            <p className="text-gray-500 dark:text-gray-400">Sept 20, 2024</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 rounded-3xl border bg-white dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                <Bell className="w-5 h-5" />
                            </button>
                            <div className="flex items-center">
                                <Image
                                    alt='Profile'
                                    src={profileImage}
                                    width={0}
                                    height={0}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span>John Smith</span>
                            </div>
                        </div>
                    </header>

                    <div className='flex w-full justify-around gap-4 mb-4'>
                        <div className='flex-1'>
                            <SavingsChart />
                        </div>
                        <div className=''>
                            <SavingsCards />
                        </div>
                    </div>
                    <SavingsPlanTable />

                </main>
            </div>
        </div>
    )
}

