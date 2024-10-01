import { LogOut } from 'lucide-react'
// import { profileImage } from './dashboard'
export default function SideNav() {
    return (
        <aside className="w-64 p-6 bg-white dark:bg-gradient-to-tl from-[#000] to-[#262724] shadow-md flex flex-col">
            <div className="flex items-center mb-8 font-bold text-3xl font-mono">
                {"100xBOOST"}
                {/* <img src={profileImage} alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <h2 className="font-semibold">John Smith</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Oxish</p>
                </div> 
                */}
            </div>
            <nav>
                <a href="#" className="flex items-center p-2 mb-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300">
                    <span className="mr-3">📊</span> Dashboard
                </a>
                <a href="#" className="flex items-center p-2 mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <span className="mr-3">💰</span> Savings
                </a>
                <a href="#" className="flex items-center p-2 mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <span className="mr-3">📁</span> Resources
                </a>
                <a href="#" className="flex items-center p-2 mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <span className="mr-3">👥</span> Recommendations
                </a>
                <a href="#" className="flex items-center p-2 mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <span className="mr-3">📄</span> Invoices
                </a>
            </nav>
            <div className="mt-auto">
                <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <span className="mr-3">⚙️</span> Settings
                </a>
                <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <span className="mr-3">❓</span> Help
                </a>
                <a className="flex items-center mt-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <LogOut className="w-5 h-5 mr-2" />
                    Log Out
                </a>
            </div>
        </aside>
    )
}