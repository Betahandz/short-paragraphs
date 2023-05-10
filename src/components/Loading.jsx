const Loading = ({loading}) => {
    return (
        <div className={`loading ${loading ? null : "rmLoading"}`}>
            <h1 className="l-t">
                Short Paragraphs
            </h1>
        </div>
    )
}

export default Loading;