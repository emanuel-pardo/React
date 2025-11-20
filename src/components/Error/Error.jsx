import PageContainer from "../PageContainer/PageContainer";

const Error = ({errorMessage = "intente nuevamente más tarde..."}) => {

    const title = "error";


    return (
        <>
            <PageContainer title={title} subtitle={errorMessage} />
        </>

    )
}

export default Error;

