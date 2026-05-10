import React from "react";

function Events() {

  return (

    <div>

      <h1>Upcoming Events</h1>

      <div className="events-grid">

        <div className="event-card">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865"
            alt="event"
          />

          <h2>Annual Function</h2>

          <p>20 March 2026</p>

        </div>

        <div className="event-card">

          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="event"
          />

          <h2>Tech Fest</h2>

          <p>15 April 2026</p>

        </div>

      </div>

    </div>

  );
}

export default Events;