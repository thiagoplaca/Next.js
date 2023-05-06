import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {

    const [numero, setNumero] = useState(0)

    function Inc() {
        setNumero( numero + 1)
    }

    return (
        <Layout titulo='Componente com Estado'>
            <div>{numero}</div>
            <button onClick={Inc}>Incrementar</button>
        </Layout>
    )

}