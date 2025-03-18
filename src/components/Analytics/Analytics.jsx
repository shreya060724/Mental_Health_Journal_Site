import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon
import { Line } from 'react-chartjs-2';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebase/config';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'entries'), orderBy('createdAt', 'asc'));
      const querySnapshot = await getDocs(q);
      const dates = [];
      const moods = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.uid === auth.currentUser.uid && data.createdAt) {
          dates.push(data.createdAt.toDate().toLocaleDateString());
          moods.push(data.mood);
        }
      });
      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Mood Over Time',
            data: moods,
            fill: true, // Enables background color fill
            borderColor: 'rgb(235, 89, 89)', // Line color
            backgroundColor: 'rgba(235, 89, 89, 0.2)', // Light pastel fill
            tension: 0.4, // Smooth the line
            pointBackgroundColor: 'rgb(235, 89, 89)', // Point color
            pointBorderColor: '#fff', // Border color of points
            pointHoverBackgroundColor: '#fff', // Hover effect on points
            pointHoverBorderColor: 'rgb(235, 89, 89)',
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <Container className="py-5">

      <Button 
        variant="link" 
        className="d-flex align-items-center mb-3" 
        onClick={() => navigate('/dashboard')}
        style={{ textDecoration: 'none', color: 'rgb(235, 89, 89)', fontSize: '18px' }} 
      >
        <FaArrowLeft size={24} style={{ color: 'rgb(235, 89, 89)', marginRight: '8px' }} />
        <span style={{ color: 'rgb(235, 89, 89)', fontWeight: 'bold' }}>Back</span>
      </Button>

      <h2 style={{ color:'rgb(235, 89, 89)', textAlign: 'center'}}>Analytics & Trends</h2>
      {chartData && chartData.labels && chartData.labels.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>No data available yet.</p>
      )}
    </Container>
  );
};

export default Analytics;
