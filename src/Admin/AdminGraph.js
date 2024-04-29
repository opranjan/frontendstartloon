import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const AdminGraph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'User Count',
        data: [10, 15, 8, 12, 20, 18, 25, 22, 30, 28, 35, 32],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'User Count',
              font: {
                size: 16,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: 'Months',
              font: {
                size: 16,
              },
            },
          },
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);
  }, []);

  // User counts for each month
  const userCounts = [10, 15, 8, 12, 20, 18, 25, 22, 30, 28, 35, 32];

  // Calculate total count of all users
  const totalCount = userCounts.reduce((acc, count) => acc + count, 0);

  return (
    <div>
      <h2>Admin Graph Page</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '0 0 48%', textAlign: 'center' }}>
          <h3>Total Users</h3>
          <p>{userCounts.length}</p>
        </div>
        <div style={{ flex: '0 0 48%', textAlign: 'center' }}>
          <h3>User Count</h3>
          <p>{totalCount}</p>
        </div>
      </div>
      <div style={{ maxWidth: '800px', margin: '20px auto' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default AdminGraph;
