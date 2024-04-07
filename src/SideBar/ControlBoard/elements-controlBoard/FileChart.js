import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FileGraph = () => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <div className=" bg-[#030229] rounded-md text-white p-4">{`${payload[0].value}`}</div>
                </div>
            );
        }
    
        return null;
    };
   
    const initialData = [
    { day: '1', الملفات: 50 },
    { day: '2', الملفات: 50 },
    { day: '3', الملفات: 50 },
    { day: '4', الملفات: 100 },
    { day: '5', الملفات: 50 },
    { day: '6', الملفات: 60 },
    { day: '7', الملفات: 10 },
    { day: '8', الملفات: 50 },
    { day: '9', الملفات: 50 },
    { day: '10', الملفات: 50 },
    { day: '11', الملفات: 80 },
    { day: '12', الملفات: 50 },
    { day: '13', الملفات: 60 },
    { day: '14', الملفات: 50 },
    { day: '15', الملفات: 100 },
    { day: '16', الملفات: 50 },
    { day: '17', الملفات: 60 },
    { day: '18', الملفات: 10 },
    { day: '19', الملفات: 50 },
    { day: '20', الملفات: 50 },
    { day: '21', الملفات: 80 },
    { day: '22', الملفات: 50 },
    { day: '23', الملفات: 60 },
    { day: '24', الملفات: 50 },
    { day: '25', الملفات: 100 },
    { day: '26', الملفات: 50 },
    { day: '27', الملفات: 60},
    { day: '28', الملفات: 10 },
    { day: '29', الملفات: 50},
    { day: '30', الملفات: 50 },
    
    

];

    const [data, setData] = useState(initialData);

    // useEffect(() => {
    // const interval = setInterval(() => {
    //     const now = new Date();
    //     const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    //
        
    //     setData(prevData => {
    //         const updatedData = [...prevData];
    //         const index = updatedData.findIndex(item => item.time === currentTime);
    //         if (index !== -1) {
    //         updatedData[index] = { time: currentTime, الملفات: updatedData[index].الملفات };
    //         }
    //
    //         return updatedData;
    //     });
    //     },360000);

    // return () => clearInterval(interval);
    // }, []);

    return (
        <ResponsiveContainer width="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
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