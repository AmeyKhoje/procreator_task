import FeatherIcon from "feather-icons-react"

const FileListCard = (props) => {
    const {
        image,
        title,
        fileType,
        size
    } = props;

    return (
        <div className="file-list_card">
            <div className="file-list_card-container">
                <div className="file-list_card-img">
                    <img src={image} alt="" />
                </div>
                <div className="file-list_card-info">
                    <div className="file-list_card-info-name">
                        <p>
                            {title}
                        </p>
                    </div>
                    <span>
                        {fileType} : {size}
                    </span>
                </div>
                <div className="file-list_card-more">
                    <button>
                        <FeatherIcon icon="more-vertical" size={22} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FileListCard