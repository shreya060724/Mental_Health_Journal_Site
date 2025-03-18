import React, { useState, useEffect } from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";
import { db, auth } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon
import { useNavigate } from 'react-router-dom';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles for Calendar
import moment from "moment";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entries, setEntries] = useState([]);
   const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchEntries = async () => {
      try {
        const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
        console.log("Fetching entries for:", formattedDate);

        const entriesRef = collection(db, "entries");
        const q = query(entriesRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const filteredEntries = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          // Convert Firestore Timestamp to Date String
          let createdAtDate = "";
          if (data.createdAt && data.createdAt.toDate) {
            createdAtDate = moment(data.createdAt.toDate()).format("YYYY-MM-DD");
          } else {
            console.warn("Invalid createdAt format:", data.createdAt);
            return;
          }

          // Compare formatted dates
          if (createdAtDate === formattedDate) {
            filteredEntries.push({ id: doc.id, ...data });
          }
        });

        setEntries(filteredEntries);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, [selectedDate, user]);

  return (
    <>
      <style>
        {`
          .calendar-container {
            background-color: #F3CFC6; /* Pastel pink */
            padding: 20px;
            border-radius: 12px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          }
          .react-calendar {
            width: 100%;
            max-width: 400px;
            background: #F8D7DA;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
            font-family: 'Arial', sans-serif;
          }
          .react-calendar__tile {
            padding: 10px;
            font-size: 1.2rem;
            color: #D63384;
          }
          .react-calendar__tile--active {
            background: #E57373 !important;
            color: white;
            border-radius: 50%;
          }
          .entry-card {
            background-color: #FFD1DC;
            border: none;
            padding: 10px;
            border-radius: 12px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <Button
        variant="link"
        className="d-flex align-items-center mb-3"
        onClick={() => navigate('/dashboard')}
        style={{ textDecoration: 'none', color: 'rgb(235, 89, 89)', fontSize: '18px' }}
      >
        <FaArrowLeft size={24} style={{ color: 'rgb(235, 89, 89)', marginRight: '8px' }} />
        <span style={{ color: 'rgb(235, 89, 89)', fontWeight: 'bold' }}>Back</span>
      </Button>

      <Container className="py-5 text-center">
        <h2 style={{ color: "#E57373", fontWeight: "bold" }}>📅 Your Journal Calendar</h2>

        <div className="calendar-container mt-4 mx-auto" style={{ maxWidth: "420px" }}>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>

        <h3 className="mt-4" style={{ color: "#D63384", fontWeight: "bold" }}>
          Entries for {moment(selectedDate).format("MMMM D, YYYY")}
        </h3>

        {entries.length > 0 ? (
          <ListGroup className="mt-3">
            {entries.map((entry) => (
              <Card key={entry.id} className="entry-card my-2">
                <Card.Body>
                  <Card.Text><strong>Mood:</strong> {entry.mood}/5 😊</Card.Text>
                  <Card.Text>{entry.entry}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </ListGroup>
        ) : (
          <p className="mt-3" style={{ color: "#E57373", fontWeight: "bold" }}>
            No journal entries found for this date.
          </p>
        )}
      </Container>
    </>
  );
};

export default CalendarView;
