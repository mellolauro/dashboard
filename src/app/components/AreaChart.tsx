'use client';

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,TooltipProps, ResponsiveContainer } from 'recharts';

const productSales = [
{
    name: 'Jan',
    JornadaAtena: 4000,
    Cobranca: 2400,
},
{
    name: 'Fev',
    JornadaAtena: 4000,
    Cobranca: 2210,
},
{
    name: 'Março',
    JornadaAtena: 2000,
    Cobranca: 2290,
    },
{
    name: 'Abril',
    JornadaAtena: 2780,
    Cobranca: 2000,
    },
{
    name: 'Mai',
    JornadaAtena: 1890,
    Cobranca: 2181,
},
{
    name: 'Jun',
    JornadaAtena: 2390,
    Cobranca: 2500,
},
{
    name: 'Jul',
    JornadaAtena: 4000,
    Cobranca: 2210,
},
];

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
            width={500} 
            height={400} 
            data={productSales}
            margin={{right:30}}
            >
            <YAxis />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="5 5"/>
            <Tooltip content={<CustomTooltip/>}/>
            <Legend />

            <Area type="monotone"
            dataKey="JornadaAtena"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId="1"
            />

        <Area type="monotone"
            dataKey="Cobranca"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId="1"
            />
        </AreaChart>
        </ResponsiveContainer>
        
    ) ;
};

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
                    Product 1:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Product 2:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
    return null;

};

export default AreaChartComponent;