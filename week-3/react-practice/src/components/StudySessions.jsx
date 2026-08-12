import { useState } from "react";

function StudySession() {
  const [sessions, setSessions] = useState(0);

  function completeSession() {
    setSessions(prevSessions => prevSessions + 1);
  }

  return (
    <section>
      <h2>Study Sessions</h2>

      <p>Sessions completed: {sessions}</p>

      <button onClick={completeSession}>
        Complete Session
      </button>
    </section>
  );
}

export default StudySession;