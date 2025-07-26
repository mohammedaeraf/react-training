function CourseList() {
    // expected to return markup (HTML/CSS Code)
    const courses = [
    {
      id: "GD",
      title: "Graphic Design with Canva",
      duration: "30 days",
      description:
        "Graphic Design with Canva.. Graphic Design with Canva... Graphic Design with Canva",
    },
    {
      id: "WD",
      title: "Advanced Web Design",
      duration: "60 days",
      description:
        "Advanced Web Design... Advanced Web Design.. Advanced Web Design",
    },
    {
      id: "REACT",
      title: "Frontend Development using React and TypeScript",
      duration: "60 days",
      description:
        "Frontend Development using React and TypeScript.. Frontend Development using React and TypeScriptFrontend Development using React and TypeScript",
    },
  ];

  return (
    <>
      <h2 className="text-primary">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item" key={course.id}>
            {course.title} - {course.duration}
            <br />
            <span className="small text-danger">{course.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseList;