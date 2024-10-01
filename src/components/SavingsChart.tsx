// import { LineChart } from 'lucide-react'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'


const retrivedData = {
    "ResultsByTime": [
        {
            "TimePeriod": {
                "Start": "2023-04-01",
                "End": "2023-04-02"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.50",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-02",
                "End": "2023-04-03"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "4.10",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-03",
                "End": "2023-04-04"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "2.80",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-04",
                "End": "2023-04-05"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.00",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-05",
                "End": "2023-04-06"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.70",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-06",
                "End": "2023-04-07"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.20",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-07",
                "End": "2023-04-08"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "4.00",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-08",
                "End": "2023-04-09"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.90",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-09",
                "End": "2023-04-10"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.75",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-10",
                "End": "2023-04-11"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "4.30",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-11",
                "End": "2023-04-12"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.60",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-12",
                "End": "2023-04-13"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.85",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-13",
                "End": "2023-04-14"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.95",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-14",
                "End": "2023-04-15"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "4.10",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-15",
                "End": "2023-04-16"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.45",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-16",
                "End": "2023-04-17"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "4.20",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-17",
                "End": "2023-04-18"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.70",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-18",
                "End": "2023-04-19"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.55",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-19",
                "End": "2023-04-20"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.80",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        },
        {
            "TimePeriod": {
                "Start": "2023-04-20",
                "End": "2023-04-21"
            },
            "Total": {
                "BlendedCost": {
                    "Amount": "3.65",
                    "Unit": "USD"
                }
            },
            "Groups": [],
            "Estimated": false
        }
    ],
    "ResponseMetadata": {
        "RequestId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
        "HTTPStatusCode": 200
    }
};


interface toDisplay {
    date: string;
    amount: number;
}

// Initialize the array
const filteredData: toDisplay[] = [];

// Iterate and populate the array
retrivedData.ResultsByTime.forEach((dayData) => {
    const date = dayData.TimePeriod.Start;
    const amount = parseFloat(dayData.Total.BlendedCost.Amount); // Parse amount as a number
    const topush: toDisplay = { date, amount };
    filteredData.push(topush);
});


export function SavingsChart() {
    return (
        <div className="bg-white p-6 rounded-lg mb-8 dark:bg-gradient-to-tr from-[#000] to-[#262724] shadow-lg shadow-[#ffffff10]">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Savings Chart</h3>
                <select className="p-2 rounded-md bg-gray-100 dark:dark:bg-gradient-to-tr from-[#000] to-[#262724] border border-gray-300 dark:border-gray-600">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={500}>
                <AreaChart width={400} height={400} data={filteredData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="1 2" />
                    <Tooltip />
                    <Area type="monotone" dataKey="withoutPump" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="amount" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

/* 
<ResponsiveContainer width="100%" height={500}>
                <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="1 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ffffff30" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart width={400} height={400} data={revenueData}>
                    <CartesianGrid strokeDasharray="1 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <Line type="bump" dataKey="value" stroke="#8884d8" />
                </LineChart>
</ResponsiveContainer> 
*/