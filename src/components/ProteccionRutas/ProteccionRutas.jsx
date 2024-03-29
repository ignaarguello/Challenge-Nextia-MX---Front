import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const proteccionRutas = ({isAllowed, children, reDirect})=>{
    if(!isAllowed){
        console.log(isAllowed)
        return <Navigate to={reDirect}/>
    }
    return children ? children : <Outlet/>
}


export default proteccionRutas