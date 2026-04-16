import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        loadChartData();
    }, []);

    const loadChartData = () => {
        const events = JSON.parse(localStorage.getItem('timelineEvents') || '[]');
        
        if (events.length === 0) {
            setChartData([]);
            return;
        }

        // Aggregate events by type
        const aggregated = {};
        events.forEach(event => {
            const type = event.type?.toLowerCase() || 'other';
            aggregated[type] = (aggregated[type] || 0) + 1;
        });

        // Transform to chart format
        const data = Object.entries(aggregated).map(([name, value]) => ({
            name: name.charAt(0).toUpperCase() + name.slice(1),
            value
        }));

        setChartData(data);
    };

    // Colors for the pie chart - matching your design
    const COLORS = ['#7C3AED', '#10B981', '#0EA5E9'];

    return (
        <div className='min-h-screen bg-slate-50 py-10'>
            <div className='max-w-4xl mx-auto px-4'>
                <h1 className='text-3xl font-bold text-slate-800 mb-8'>Friendship Analytics</h1>

                <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-8'>
                    <h2 className='text-xl font-semibold text-slate-700 mb-6'>By Interaction Type</h2>
                    
                    {chartData.length === 0 ? (
                        <div className='flex flex-col items-center justify-center py-16'>
                            <div className='text-center'>
                                <p className='text-slate-500 mb-4'>No interaction data yet.</p>
                                <p className='text-slate-400 text-sm'>Go to a friend's profile and log interactions to see analytics here!</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex justify-center'>
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={140}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => `${value} interactions`} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stats;