function LearningCard({ week, topic, status }) {
  return (
    <div>
      <h2>{week}</h2>
      <p>Topic: {topic}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default LearningCard;