import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FileGraph = () => {
    const initialData = [
    { minute: '1', الملفات: 50 },
    { minute: '2', الملفات: 50 },
    { minute: '3', الملفات: 50 },
    { minute: '4', الملفات: 100 },
    { minute: '5', الملفات: 50 },
    { minute: '6', الملفات: 60 },
    { minute: '7', الملفات: 10 },
    { minute: '8', الملفات: 50 },
    { minute: '9', الملفات: 50 },
    { minute: '10', الملفات: 50 },
    { minute: '11', الملفات: 80 },
    { minute: '12', الملفات: 50 },
    { minute: '13', الملفات: 60 },
    { minute: '14', الملفات: 50 },
    { minute: '15', الملفات: 100 },
    { minute: '16', الملفات: 50 },
    { minute: '17', الملفات: 60 },
    { minute: '18', الملفات: 10 },
    { minute: '19', الملفات: 50 },
    { minute: '20', الملفات: 50 },
    { minute: '21', الملفات: 80 },
    { minute: '22', الملفات: 50 },
    { minute: '23', الملفات: 60 },
    { minute: '24', الملفات: 50 },
    { minute: '25', الملفات: 100 },
    { minute: '26', الملفات: 50 },
    { minute: '27', الملفات: 60},
    { minute: '28', الملفات: 10 },
    { minute: '29', الملفات: 50},
    { minute: '30', الملفات: 50 },
    
    

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
        <Line  type="monotone" dataKey="الملفات" stroke="#284A68" strokeWidth={4}  filter='url(#shadow)' activeDot={{ r: 10 ,fill:'#DDB660'  }} dot={{r:6, fill:'#DDB660', strokeWidth:2,stroke:'white'}}/>
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