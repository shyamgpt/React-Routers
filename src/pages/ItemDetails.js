import { useParams } from "react-router-dom";
function ItemDetails(){

    const param = useParams();
    console.log(param);
    return(
        <>
        <main>
            <h1>ItemDetails</h1>
        </main>

        <h2>{param.id}</h2>
        </>
    )
}
export default ItemDetails;