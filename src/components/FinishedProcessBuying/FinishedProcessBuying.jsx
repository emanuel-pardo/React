import "./FinishedProcessBuying.css";
import PageContainer from "../PageContainer/PageContainer";
import { Link } from "react-router-dom";
import Error from "../Error/Error";

const FinishedProcessBuying = ({ orderId }) => {
    if (!orderId)
        return (
            <Error errorMessage={"Operación fallida!"} />
        )

    return (
        <>
            <PageContainer
                title="Compra Exitosa"
                subtitle="Gracias por confiar en nosotros!"
                text={"N° de Orden: " + orderId}
                imageSrc="https://i.postimg.cc/tgzJcH2h/checkout.jpg"
            />
            <div className="container-link-finished">
                <Link className="btn btn-dark" to="/">Página Principal</Link>
            </div>
        </>
    )
}

export default FinishedProcessBuying