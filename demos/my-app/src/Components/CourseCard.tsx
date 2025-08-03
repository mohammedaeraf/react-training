// Define the props interface for the CourseCard component
interface CourseProps {
  title: string; // The title of the course
  instructor: string; // The instructor's name
  duration: number; // Duration of the course in hours
  topics: string[]; // Array of topics covered in the course
}

// Functional component to display course information
const CourseCard = (props: CourseProps) => {
  return (
    <div className="border border-info  m-3 p-3">
      {/* Display the course title */}
      <h2>{props.title}</h2>
      {/* Display the instructor's name */}
      <p>Instructor: {props.instructor}</p>
      {/* Display the course duration */}
      <p>Duration: {props.duration} hours</p>
      {/* Label for the topics list */}
      <p>Topics Covered:</p>
      <ol>
        {/* Iterate over the topics array and render each topic as a list item */}
        {props.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ol>
    </div>
  );
};

export default CourseCard;
