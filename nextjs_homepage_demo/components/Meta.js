import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charset="utf-8" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Learn Next.js | Homepage",
    keywords: "next.js, react, demo",
    description: "A simple Next.js homepage demo",
}

export default Meta
