function Skills(props) {
  return (
    <ul>
      {props.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
