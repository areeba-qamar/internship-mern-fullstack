function GoalInput({ goal, setGoal }) {
  return (
    <input
      value={goal}
      onChange={(event) => setGoal(event.target.value)}
      placeholder="Enter your learning goal"
    />
  );
}

export default GoalInput;