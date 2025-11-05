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
    {
      id: "AI & ChatGPT",
      title: "AI & ChatGPT",
      duration: "30 days",
      description: "AI & ChatGPT",
    },
    {
      id: "AI & ChatGPT",
      title: "AI & ChatGPT",
      duration: "30 days",
      description: "AI & ChatGPT",
    },
    {
      id: "AI & ChatGPT",
      title: "AI & ChatGPT",
      duration: "30 days",
      description: "AI & ChatGPT",
    },
    {
      id: "AI & ChatGPT",
      title: "AI & ChatGPT",
      duration: "30 days",
      description: "AI & ChatGPT",
    },
  ];

  return (
    <>
      <h2 className="text-primary">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">
            <span className="text-primary">{course.title}</span> -{" "}
            <span className="text-secondary">{course.duration}</span>
            <br />
            <span className="small text-danger">{course.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseList;
