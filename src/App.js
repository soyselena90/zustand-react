import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers/AllUsers";
import Header from "./components/Header";
import SeletedUser from "./components/SelectedUser/SeletedUser";

function App() {
   return (
      <div className="App">
         <Header />
         <Router>
            <Routes>
               <Route exact path="/" element={<AllUsers />} />
               <Route exact path="/users/:userId" element={<SeletedUser />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
