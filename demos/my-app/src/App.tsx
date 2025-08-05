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
import PostList from "./Components/PostList";

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
          <Route path="/courses" element={<CourseList2 />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />

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
