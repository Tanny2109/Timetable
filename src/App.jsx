import React from "react";
import Timetable from "./components/Timetable";
import TT from "./components/TT";
import Header from "./components/Header";
 const App=()=>{
    return (
    <div>
            <Header />
            <div style={{paddingTop: '10px'}}>
                <TT/>
            </div>
    </div>
    )
}
export default App;