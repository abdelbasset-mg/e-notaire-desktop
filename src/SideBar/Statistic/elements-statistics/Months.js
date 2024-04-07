import React, { useState, useMemo } from 'react';

function MonthsList({ monthsList }) {
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const selectStyle = {
        display: 'flex',
        alignItems: 'center',    
        marginTop: '10px',
        marginLeft: '1cm',
        height: 30,
        width: 120, 
        direction: 'rtl', 
        border: 'none',
        borderRadius: '4px',
        boxShadow: '-2px 0px 8px 1px #DDB660',
        color: '#284A68',
        outline: 'none',
        textAlign: 'center',
        fontWeight: 600, 
        lineHeight: '40px', 
    };

    return (
        <select style={selectStyle} value={selectedMonth} onChange={handleChange}>
            {monthsList.map((month, index) => (
                <option key={index} value={month}>
                    {month}
                </option>
            ))}
        </select>
    );
}

MonthsList.defaultProps = {
    monthsList: [
        'شهر', // Option par défaut
        'يناير',
        'فبراير',
        'مارس',
        'إبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
    ],
};

export default MonthsList;