import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

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

    const [data, setData] = useState([]);
    const [contractCount, setContractCount] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const currentDateFormatted = formatDate(currentDate);
                const contractDataResponse = await axios.get(`http://localhost:5000/contracts-count?date=${currentDateFormatted}`);
                const contractCount = contractDataResponse.data.contractCount;
                setContractCount(contractCount);
            } catch (error) {
                console.error("Erreur lors de la récupération de contractCount :", error);
            }
        };

        fetchData();
    }, [currentDate]);

    useEffect(() => {
        // Update current date at midnight each day
        const midnight = new Date(currentDate);
        midnight.setHours(24, 0, 0, 0);
        const timeoutId = setTimeout(() => {
            setCurrentDate(new Date()); // Update current date
        }, midnight.getTime() - currentDate.getTime());

        return () => clearTimeout(timeoutId);
    }, [currentDate]);

    useEffect(() => {
        // Generate data for the graph
        const newData = [];
        for (let i = 0; i < 30; i++) { // Loop for 30 days
            const date = new Date();
            date.setDate(currentDate.getDate() - i);
            const formattedDate = formatDate(date);
            const month = date.toLocaleString('default', { month: 'short' }); // Get short month name
            const contractsCount = i === 0 ? contractCount : 0; // Assign contractCount to currentDate and 0 to previous dates
            newData.push({ day: `${date.getDate()} ${month}`, contracts: contractsCount });
        }
        setData(newData);
    }, [contractCount]);

    // Function to format date as 'YYYY-MM-DD'
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" type="category" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="contracts" stroke="#284A68" strokeWidth={4} filter='url(#shadow)' activeDot={{ r: 10, fill: '#DDB660' }} dot={{ r: 6, fill: '#DDB660', strokeWidth: 2, stroke: 'white' }} />
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