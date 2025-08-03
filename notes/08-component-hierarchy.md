## 📘 React Component Hierarchy

Here’s a simple document explaining **Component Hierarchy in React** using an example of a `Course App`, where:

- The **App** component contains the `CourseList`.
- The **CourseList** contains multiple `CourseCard` components.

---

## 📘 React Component Hierarchy — Course App Example

### 🎯 Objective

To understand how **React component hierarchy** works and how data flows from parent to child using `props`.

---

## 🏗️ Component Structure

```txt
App
└── CourseList
    ├── CourseCard
    ├── CourseCard
    └── CourseCard
```

---

## 🔹 1. `App` Component — Root Component

The root component where the application starts. It contains the `CourseList` component.

```tsx
// App.tsx
import CourseList from "./components/CourseList";

function App() {
  return (
    <div className="container">
      <h1>Course Explorer</h1>
      <CourseList />
    </div>
  );
}

export default App;
```

---

## 🔹 2. `CourseList` Component — Middle Layer

This component:

- Retrieves or contains an array of `Course` data.
- Maps each course to a `CourseCard` and passes data using props.

```tsx
// CourseList.tsx
import CourseCard from "./CourseCard";

const CourseList = () => {
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

export default CourseList;
```

---

## 🔹 3. `CourseCard` Component — Leaf Node

This is the **child component** that receives course data as `props` and displays it.

```tsx
// CourseCard.tsx
interface CourseProps {
  title: string; 
  instructor: string; 
  duration: number; 
  topics: string[];
}

// Functional component to display course information
const CourseCard = (props: CourseProps) => {
  return (
    <div className="border border-info  m-3 p-3">
      <h2>{props.title}</h2>
      <p>Instructor: {props.instructor}</p>
      <p>Duration: {props.duration} hours</p>
      <p>Topics Covered:</p>
      <ol>
        {props.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ol>
    </div>
  );
};

export default CourseCard;
```

---

## 🔄 Data Flow

- **App → CourseList → CourseCard**
  Data is passed **top-down** using `props`.

- React’s one-way data binding makes the component structure predictable and maintainable.

---

## ✅ Key Takeaways

- Component hierarchy helps structure the application into manageable parts.
- Props are used to pass data **from parent to child**.
- Good practice: Keep components **small**, **focused**, and **reusable**.
