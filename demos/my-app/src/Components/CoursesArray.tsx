function Courses() {
  let courses = [
    "Frontend React",
    "Advanced Web Design",
    "Canva",
    "Python",
    "Full Stack - MERN",
    "Express JS / Mongo DB",
  ];
  return (
    <div>
      <h2 className="text-warning">List of Courses</h2>
      <ul className="list-group">
        {
          courses.map( (course) => (
          <li className="list-group-item">{course}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default Courses;
