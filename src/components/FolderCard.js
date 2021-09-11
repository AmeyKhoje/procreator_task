import { useEffect } from "react"
import FeatherIcon from 'feather-icons-react';
import User from "../assets/images/user.jpg"

const FolderCard = (props) => {
    const {
        name,
        gb,
        mb,
        f,
        addUsers
    } = props.folder

    useEffect(() => {
        let singleWidth = (props.windowWidth - 90) / 2
        let folderCards = document.querySelectorAll(".folder-card")
        folderCards.forEach((folderCard) => {
            folderCard.style.width = `${singleWidth}px`
            folderCard.style.height = `${singleWidth}px`
        })
        
    })

    return (
        <button className="folder-card">
            <div className="folder-card_head flex">
                <div className="folder-card_head-name">
                    <p>
                        {name}
                    </p>
                </div>
                <div className="folder-card_head-more">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="folder-card_head-sm-text">
                <p>
                    {f} f {mb > 0 ? mb : gb} {mb > 0 ? " mb" : " gb"}
                </p>
            </div>
            <div className="folder-card_users-flex flex align-center">
                <div className="users-flex_img">
                    <img src={User} alt="" />
                </div>
                <div className="users-flex_img">
                    <img src={User} alt="" />
                </div>
                <div className="users-flex_img">
                    <img src={User} alt="" />
                </div>
                {
                    addUsers > 3 &&
                    <div className="users-flex_img number">
                        +{addUsers - 3}
                    </div>
                }
            </div>
        </button>
    )
}

export default FolderCard