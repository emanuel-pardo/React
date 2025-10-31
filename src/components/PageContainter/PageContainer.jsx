import { useEffect, useState } from "react";
import "./PageContainer.css";

const PageContainer = (props) => {

    const containsImage = props?.showImage ?? false;
    
    return (
        <>
            <div className='ilc-container'>
                <h1 className="ilc-title">{props?.title}</h1>
                <h2 className="ilc-subtitle">{props?.subtitle} </h2>
                <p className="ilc-text">{props?.text}</p>
                {containsImage &&
                    (<img src="https://static.wixstatic.com/media/baed1c_f535514e01d14af4a483daa366e5bfcb~mv2.png/v1/fill/w_334,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gemini_Generated_Image_1428le1428le1428.png"
                        alt="logo"
                        className="ilc-img"
                    />)}
            </div>
        </>
    )
}

export default PageContainer