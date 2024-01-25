import Account from "./Pages/Account"
import Homescreen from "./Pages/Homescreen"
import Login from "./Pages/Login"
import Pending from "./Pages/Pending"
import Signup from "./Pages/Signup"
import Transaction from "./Pages/Transaction"
import Trustfund from "./Pages/Trustfund"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { auth } from './firebaseConfig';



function App() {
 

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup auth={auth}/>}    />
            <Route path="/login" element={<Login  auth={auth}/>}    />
            <Route path="/homescreen" element={<Homescreen/>}    />
            <Route path="/trustfund" element={<Trustfund/>}    />
            <Route path="/transaction" element={<Transaction/>}    />
            <Route path="/account" element={<Account/>}    />
            <Route path="/pending" element={<Pending/>}    />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
