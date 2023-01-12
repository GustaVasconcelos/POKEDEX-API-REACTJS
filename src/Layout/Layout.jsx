import React from "react";
import './Layout.css'
const Layout = (props) =>{

    return(
        <div className="Layout_body">
            {props.children}
        </div>
    )
}

export default Layout