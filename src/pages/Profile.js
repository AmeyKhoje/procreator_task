import { useEffect, useState } from "react"
import Edit from "../assets/images/edit.png"
import User from "../assets/images/user.jpg"
import ProfileListCard from "../components/ProfileListCard"

const Profile = (props) => {
    const [ filledStorage, setFilledStorage ] = useState(60)

    useEffect(() => {
        let progressSpan = document.querySelector(".progress-show")
        progressSpan.style.width = `${filledStorage}%`;

        let profileHeadHeight = document.querySelector(".profile-head").getBoundingClientRect().height
        let profileInfoHeight = document.querySelector(".profile-info").getBoundingClientRect().height
        let profileProgressHeight = document.querySelector(".profile-progress").getBoundingClientRect().height
        let profileActionHeight = document.querySelector(".profile-action").getBoundingClientRect().height

        let profileList = document.querySelector(".profile-list")
        profileList.style.height = `${window.innerHeight - profileHeadHeight - profileInfoHeight - profileProgressHeight - profileActionHeight - 50}px`
    }, [])

    return (
        <div className="profile">
            <div className="profile-head flex justify-between">
                <h3>
                    Profile
                </h3>
                <div className="profile-edit">
                    <img src={Edit} alt="" />
                </div>
            </div>
            <div className="profile-info">
                <div className="profile-info_flex flex align-center">
                    <div className="profile-image">
                        <img src={User} alt="" />
                    </div>
                    <div className="profile-user_details">
                        <h6 className="profile-user_details-name">
                            John Dae
                        </h6>
                        <span>
                            1458 files · 25 folders
                        </span>
                    </div>
                </div>
            </div>
            <div className="profile-progress">
                <h4>
                    32.5 GB free&nbsp;
                    <span>
                        of 100 GB
                    </span>
                </h4>
                <div className="progress">
                    <span className="progress-show"></span>
                </div>
            </div>
            <div className="profile-action">
                <button className="profile-increase_storage">
                    Increase storage space
                </button>
            </div>
            <div className="profile-list">
                <ProfileListCard head="Storage management"actionType="arrow" />
                <ProfileListCard head="Devices" subhead="iPhone, Macbook, iPad" actionType="arrow" />
                <ProfileListCard head="Camera uploads"actionType="action" />
                <ProfileListCard head="Use data for file transfer" actionType="action" />

                {/* <ProfileListCard head="Camera uploads"actionType="action" />
                <ProfileListCard head="Use data for file transfer" actionType="action" /> */}
            </div>
        </div>
    )
}

export default Profile