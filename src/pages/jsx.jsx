import Layout from "@/components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{'Estamos aprendendo Next.Js'}</h2>
    }

    return (
        <Layout titulo='Entendendo o JSX'>
            <div>
                {titulo}
                {subtitulo()}
            </div>
        </Layout>

    )
}