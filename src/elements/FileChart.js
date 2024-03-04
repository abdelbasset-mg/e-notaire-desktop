import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FileGraph = () => {
    const initialData = [
    { hour: '12:00', الملفات: 10 },
    { hour: '01:00', الملفات: 25 },
    { hour: '02:00', الملفات: 5 },
    { hour: '03:00', الملفات: 40 },
    { hour: '04:00', الملفات: 5 },
    { hour: '05:00', الملفات: 32 },

];

    const [data, setData] = useState(initialData);

    useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        let i =10 ;
        
        setData(prevData => {
            const updatedData = [...prevData];
            const index = updatedData.findIndex(item => item.time === currentTime);
            if (index !== -1) {
            updatedData[index] = { time: currentTime, الملفات: updatedData[index].الملفات + i };
            }
            i=i+10;
            return updatedData;
        });
        },360000);

    return () => clearInterval(interval);
    }, []);

    return (
        <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="minute" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line  type="monotone" dataKey="الملفات" stroke="#284A68" strokeWidth={4}  filter='url(#shadow)' activeDot={{ r: 10 ,fill:'#DDB660'  }} dot={{r:8, fill:'#DDB660', strokeWidth:2,stroke:'white'}}/>
        <defs>
    <filter id="shadow" x="-10" y="-10" width="300" height="300">
    <feDropShadow dx="-1" dy="3" stdDeviation="3" floodColor="#DDB660" />
    </filter>
</defs>
        </LineChart>
        </ResponsiveContainer>
);
};

export default FileGraph;