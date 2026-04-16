import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");

  const bookTicket = async () => {
    try {
      const response = await fetch(
        "https://mbx96m3uta.execute-api.us-east-1.amazonaws.com/prod/ticket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            event
          })
        }
      );

      const data = await response.json();
      alert("Ticket Booked: " + data.ticketId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>🎟️ Ticket Booking System</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Event"
        onChange={(e) => setEvent(e.target.value)}
      />

      <button onClick={bookTicket}>Book Ticket</button>
    </div>
  );
}

export default App;