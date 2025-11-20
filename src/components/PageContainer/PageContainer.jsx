import { useEffect, useState } from "react";
import "./PageContainer.css";

const PageContainer = (props) => {

    return (
        <>
            {props?.imageSrc &&
                (<img
                    src={props?.imageSrc}
                    alt="imagen-central"
                    className={props?.isCover && props.isCover === true ? "ilc-imgcover" : "ilc-imgcontain"}
                />)}
            <div className='ilc-container'>
                <h1 className="ilc-title">{props?.title?.toUpperCase()}</h1>
                <h2 className="ilc-subtitle">{props?.subtitle?.toUpperCase()} </h2>
                <p className="ilc-text">{props?.text?.toUpperCase()}</p>
            </div>
        </>
    )
}

export default PageContainer