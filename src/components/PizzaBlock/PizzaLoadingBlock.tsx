import * as React from "react"
import ContentLoader from "react-content-loader"

type PropsType = {
}

export const PizzaLoadingBlock: React.FC<PropsType> = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="144" cy="124" r="120" />
        <rect x="25" y="284" rx="0" ry="0" width="0" height="2" />
        <rect x="1" y="286" rx="3" ry="3" width="280" height="24" />
        <rect x="176" y="295" rx="0" ry="0" width="49" height="8" />
        <rect x="168" y="294" rx="0" ry="0" width="7" height="6" />
        <rect x="210" y="355" rx="0" ry="0" width="0" height="1" />
        <rect x="1" y="326" rx="6" ry="6" width="290" height="74" />
        <rect x="211" y="375" rx="0" ry="0" width="0" height="1" />
        <rect x="77" y="416" rx="0" ry="0" width="0" height="1" />
        <rect x="1" y="406" rx="6" ry="6" width="100" height="40" />
        <rect x="109" y="440" rx="0" ry="0" width="1" height="1" />
        <rect x="121" y="406" rx="20" ry="20" width="160" height="40" />
    </ContentLoader>
)