import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProfileCard from "./Components/ProfileCard";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import CourseList2 from "./Components/CourseList2";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Counter2 from "./Components/Counter2";
import PostList4 from "./Components/PostList4";
import RecipeSearch from "./Components/RecipeSearch";
import CourseList3 from "./Components/CourseList3";
import CourseAdd from "./Components/CourseAdd";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main className="container mt-4 minHt">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<PostList4 />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/counter" element={<Counter2 />} />
          <Route path="/recipes" element={<RecipeSearch />} />
          <Route path="/courses" element={<CourseList3 />} />
          <Route path="/add-course" element={<CourseAdd />} />
          <Route path="/edit-course/:id" element={<CourseAdd />} />

          <Route
            path="/profile"
            element={
              <ProfileCard
                name="Usman Ghani"
                role="UI/UX Designer"
                skills={["HTML", "CSS"]}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
