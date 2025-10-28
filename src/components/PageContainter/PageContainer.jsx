import { useEffect, useState } from "react";
import "./PageContainer.css";

const PageContainer = (props) => {
 
    return (
        <>
            <div className='ilc-container'>
                <h1 className="ilc-title">{props.title}</h1>
                <h2 className="ilc-subtitle">{props.subtitle} </h2>
                <p className="ilc-text">{props.text}</p>
            </div>
        </>
    )
}

export default PageContainer