import React from "react";
import { Link } from "react-router-dom";


function index(){
    return (
        <>
            <div className="row">
                <ul>
                    <li><Link to="/">Baixar</Link></li>
                </ul>
            </div>
        </>
    )
}

export default index;