import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockLoading = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <rect x="60" y="24" rx="0" ry="0" width="1" height="4" />
        <rect x="13" y="18" rx="0" ry="0" width="1" height="1" />
        <circle cx="121" cy="121" r="121" />
        <rect x="0" y="253" rx="3" ry="3" width="242" height="36" />
        <rect x="0" y="299" rx="3" ry="3" width="242" height="97" />
        <rect x="0" y="418" rx="0" ry="0" width="90" height="38" />
        <rect x="108" y="413" rx="20" ry="20" width="134" height="42" />
    </ContentLoader>
)

export default PizzaBlockLoading