import Signup from "./Signup.jsx"
import Login from "./Login.jsx"
import Userprofile from "./Userprofile.jsx"
import { useOutletContext } from "react-router-dom"

function Homepage(){

    const {currentUser, setCurrentUser} = useOutletContext()
    if (!currentUser) { 
        return (
    
            <div className="home">
    
              {/* <Signup setCurrentUser={setCurrentUser}/> */}
              <Login setCurrentUser={setCurrentUser}/>
    
            </div>
    
        )
    
        } else {

    return(
        <div>
            <Userprofile/>
        </div>
    )
 pass

}
}


export default Homepage