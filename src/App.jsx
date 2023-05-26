
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './views/Home'
import AddCard from './views/AddCard'




const App = () => {
    
    return (
        <div >
            <Routes>
                <Route path='/'         element={<Home />}/>
                <Route path='/addcard'  element={<AddCard/>}/>
            </Routes>
        </div>
    )


}

export default App


