import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Otp from "./Components/Otp";
import Feeds from "./Components/Feeds";
import Bookmark from "./Components/Bookmark";
import Analytics from "./Components/Analytics";
import TeamBlog from "./Components/TeamBlog";
import Drafts from "./Components/Drafts";
import MachineLearning from "./Components/MachineLearning";
import Programming from "./Components/Programming";
import DataScience from "./Components/DataScience";
import Politics from "./Components/Politics";
import Technology from "./Components/Technology";
import Account from "./Components/Account";
import Notifications from "./Components/Notifications";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/teamblogs" element={<TeamBlog />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/machinelearning" element={<MachineLearning />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
