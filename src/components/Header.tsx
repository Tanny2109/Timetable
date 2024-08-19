import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <>
            <div className="header-container" style={{height:'100px', width: '100%', backgroundColor: 'lightGreen', borderBottom:'2px solid red'} } >
                <div style={{fontWeight:'bold', fontStyle:'italic', fontSize:'20px', textAlign:'center', paddingTop: '40px'}}>
                    Georgia Tech Fall 2024
                </div>
            </div>
        </>
    )
}

export default Header;