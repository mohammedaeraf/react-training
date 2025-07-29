function ProfileCard(props) {
  return (
    <div className="card p-3 m-3">
      <h4>{props.name}</h4>
      <p>{props.role}</p>
    </div>
  );
}
