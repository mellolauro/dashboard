'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesDate = [
    {
        name: 'Jan',
        revenue: 4000,
        profit: 2400,
    },
    {
        name: 'Fev',
        revenue: 3000,
        profit: 1398,
    },
    {
        name: 'Mar',
        revenue: 9800,
        profit: 2000,
    },
    
];

const BarChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={salesDate}
            margin={{right:30,}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="revenue" fill="#2563eb" />
                <Bar dataKey="profit" fill="#8b5cf6" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{value:number}>;
    label?: string | number;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps ) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-mefium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Revenue:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Profit:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};