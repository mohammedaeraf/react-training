## 📘 Understanding **Props** in React

### 🎯 Objective:

Learn what **props** are, how to **pass data between components**, and how to **render dynamic content** using props.

---

## 🔍 What are Props?

- **Props** stands for **Properties**
- They are used to **pass data from parent to child components**
- Props are **read-only** – child components **cannot modify them**

Think of props like **arguments** you pass to a function.

---

## 🧩 Basic Syntax:

In the parent component:

```tsx
<ChildComponent name="John" />
```

In the child component:

```tsx
function ChildComponent(props) {
  return <h2>Hello, {props.name}</h2>;
}
```

---

## 📌 Example 1: Greeting with Name

### ✅ `Greeting.tsx`

```tsx
// Step 1: Define the type
type GreetingProps = {
  name: string;
};

// Step 2: Use the type in the component
function Greeting(props: GreetingProps) {
  return <h2>Hello, {props.name}!</h2>;
}

export default Greeting;
```

### ✅ `App.tsx`

```tsx
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

🧠 **Explanation**:

- We are passing `name` as a prop.
- The `Greeting` component renders dynamic content using `{props.name}`.

---

## 📌 Example 2: Displaying a Profile Card

```tsx
type ProfileCardProps = {
  name: string;
  role: string;
  skills: string[];
};

function ProfileCard({ name, role, skills }: ProfileCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
```

### In `App.tsx`:

```tsx
<ProfileCard name="John Doe" role="Frontend Developer" />
<ProfileCard name="Jane Smith" role="UI/UX Designer" />
```

---

## 📌 Example 3: Using Arrays in Props

```tsx
type SkillsProps = {
  skills: string[];
};

function Skills(props) {
  return (
    <ul>
      {props.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
```

### In `App.tsx`:

```tsx
<Skills skills={["React", "TypeScript", "Bootstrap"]} />
```

🧠 Here, we pass an array as a prop and use `map()` to loop through it.

---

## 🛠 Best Practices

- Always use `key` in lists when using `.map()`
- Destructure props for cleaner code:

```tsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```

---

## 🧠 Summary

| Feature        | Description                               |
| -------------- | ----------------------------------------- |
| Props          | Short for "Properties", used to pass data |
| Read-only      | Child components cannot modify them       |
| Data Direction | One-way: from Parent → Child              |
| Syntax         | `<Component propName="value" />`          |

---

### 🧪 Practice Suggestions

- Create a `CourseCard` component with `title`, `duration`, and `instructor` as props.
- Pass an array of hobbies or skills and display them in a list.
