import React, { useState, useEffect } from 'react';

function DateC({color,fontSize}) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
    const timerID = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timerID);
    }, []);

  // Récupérer le jour et le mois en arabe
    const dayInArabic = currentDate.toLocaleDateString('ar-EG', { weekday: 'long' });
    const monthInArabic = currentDate.toLocaleDateString('ar-EG', { month: 'long' });

  // Formater le reste de la date avec les chiffres en français
    const dateInFrench = currentDate.toLocaleDateString('fr-FR', {day: 'numeric' });
    const yearInFrench = currentDate.toLocaleDateString('fr-FR', {year: 'numeric' });


    return (
    <div style={{color: color,fontSize: fontSize,}}>
        {dayInArabic} {dateInFrench} {monthInArabic} {yearInFrench}
    </div>
);
}

export default DateC;