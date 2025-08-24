import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProfileCard from "./Components/ProfileCard";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Counter2 from "./Components/Counter2";
import PostList4 from "./Components/PostList4";
import RecipeSearch from "./Components/RecipeSearch";
import CourseList3 from "./Components/CourseList3";
import CourseAdd from "./Components/CourseAdd";
import CourseEdit from "./Components/CourseEdit";
import RegisterUser from "./Components/RegisterUser";
import Box from "./Components/Box";
import Greeting from "./Components/Greeting";
import CourseList from "./Components/CourseList";

function App() {
  return (
    <div>
      {/* <CourseList /> */}
      <Greeting name="Aslam" />

      <Box type="briefcase">Hello World</Box>
      <Box type="suitcase">
        <p>This is inside a box.</p>
        <button>Click Me</button>
      </Box>

      <Box type="backpack">
        <h2>A Box with just a heading</h2>
      </Box>

      <Box type="luggage-bag">
        <div className="container">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>

          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
      </Box>
    </div>
    // <BrowserRouter>
    //   <Header />
    //   <NavBar />
    //   <main className="container mt-4 minHt">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/posts" element={<PostList4 />} />
    //       <Route path="/users" element={<UserList />} />
    //       <Route path="/users/:id" element={<UserDetails />} />
    //       <Route path="/register" element={<RegisterUser />} />
    //       <Route path="/recipes" element={<RecipeSearch />} />
    //       <Route path="/courses" element={<CourseList3 />} />
    //       <Route path="/add-course" element={<CourseAdd />} />
    //       <Route path="/edit-course/:id" element={<CourseEdit />} />

    //       <Route
    //         path="/profile"
    //         element={
    //           <ProfileCard
    //             name="Usman Ghani"
    //             role="UI/UX Designer"
    //             skills={["HTML", "CSS"]}
    //           />
    //         }
    //       />
    //     </Routes>
    //   </main>

    //   <Footer />
    // </BrowserRouter>
  );
}
export default App;
