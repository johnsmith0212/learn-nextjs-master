import headerStyles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Learn</span> Next.js
            </h1>
            <p className={headerStyles.description}>Keep learning and building.</p>

            {/* 可以通过 jsx 在 js 中定义样式 */}
            {/* <style jsx>{`
                .title {
                    color: #888;
                }
            `}</style> */}
        </div>
    )
}

export default Header
