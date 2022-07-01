import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const AdviceText = () => {
    return (
        <div>
            <h2>Haz click en el Boton para ver la Imagen...</h2>
        </div>
    )
}

function Products({ data }) {

    const [load, setLoad] = useState(false)

    useEffect(() => {
        console.log("Entraste al endpoint products")
    }, [])

    const handleClick = () => {
        setLoad(!load)

    }

    return (
        <div>
            <Head>
                <title>MindSet</title>
                <meta name="description" content="Brilliant mind is amazing"></meta>
            </Head>
            <h1>Products:</h1>

            {load ? <Image src="/mindset.jpg" width="1000" height="600" layout="responsive"></Image> : <AdviceText />}

            <button onClick={handleClick} style={{ margin: 10 }}>Press Here</button>
            <br></br>
            <br></br>

            {JSON.stringify(data)}
        </div>
    )
}

export async function getServerSideProps() {
    //fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    console.log(data)

    return {
        props: {
            //vamos a retornar estas props al front, ahora los envio a un componente
            data
        }
    }
}

export default Products