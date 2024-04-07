import React, { useEffect, useRef } from 'react';
import  Chart  from 'chart.js/auto';

export default function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['الزبائن الجدد', 'الزبائن القدم'],
        datasets: [
          {
            data: [67, 37], 
            backgroundColor: ['#5892C6', '#284A68'], 
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Répartition des clients',
          fontSize: 16,
        },

        plugins: {
          legend: false,
      },
        legend: {
         
          display: true,
          position: 'bottom',
        },
      },
    });

  
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className=' h-[150px] mb-[5%] mt-[3%]'>
      <canvas ref={chartRef} />
    </div>
  );
}