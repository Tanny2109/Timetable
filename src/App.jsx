import React from "react";
import Timetable from "./components/Timetable";
import Header from "./components/Header";
 const App=()=>{
    return (
    <div>
            <Header />
            <div style={{paddingTop: '10px'}}>
                <Timetable/>
            </div>
    </div>
    )
}
export default App;