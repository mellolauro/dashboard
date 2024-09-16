'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesDate = [
    {
        name: 'Jan',
        JornadaAtena: 5000,
        Cobranca: 2400,
    },
    {
        name: 'Fev',
        JornadaAtena: 3000,
        Cobranca: 1398,
    },
    {
        name: 'Mar',
        JornadaAtena: 7800,
        Cobranca: 2200,
    },
    {
        name: 'Abr',
        JornadaAtena: 8900,
        Cobranca: 2500,
    },
    {
        name: 'Mai',
        JornadaAtena: 7200,
        Cobranca: 3200,
    },
    {
        name: 'Jun',
        JornadaAtena: 6200,
        Cobranca: 5200,
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
                <Bar dataKey="JornadaAtena" fill="#2563eb" />
                <Bar dataKey="Cobranca" fill="#8b5cf6" />
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
                JornadaAtena:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                Cobranca:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};