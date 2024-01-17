import { server } from "../../../config"
import Link from "next/link"
import { useRouter } from "next/router"
import Meta from "../../../components/Meta"

const article = ({ article }) => {
    // 使用路由查找文章 id
    // const router = useRouter()
    // const { id } = router.query
    return (
        <>
            {" "}
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Back to Homepage</Link>
        </>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`${server}/api/articles/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article,
//         },
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default article
