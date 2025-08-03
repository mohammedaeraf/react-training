import CourseCard from "./CourseCard";

const CourseList2 = () => {
  const courses = [
    {
      name: "Web Design",
      instructor: "Alice Johnson",
      duration: 20,
      topics: ["HTML", "CSS", "Bootstrap"],
    },
    {
      name: "React Fundamentals",
      instructor: "Bob Smith",
      duration: 25,
      topics: ["JSX", "Components", "Hooks"],
    },
    {
      name: "Full Stack with MERN",
      instructor: "Charlie Davis",
      duration: 40,
      topics: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <div className="border border-warning m-3 p-3">
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <CourseCard
          title={course.name}
          instructor={course.instructor}
          duration={course.duration}
          topics={course.topics}
        />
      ))}
    </div>
  );
};

export default CourseList2;
