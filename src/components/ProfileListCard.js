import FeatherIcon from "feather-icons-react"
import { useState } from "react";
import Switch from "react-switch";

const ProfileListCard = (props) => {
    const [ checked, setChecked ] = useState(false)

    const {
        head,
        subhead,
        actionType
    } = props;

    return (
        <div className="profile-list_card">
            <div className="profile-list_card-body">
                <h5 className="profile-list_card-head">
                    {head}
                </h5>
                <span>
                    {subhead}
                </span>
            </div>
            <div className="profile-list_card-action">
                {
                    actionType === 'arrow' ?
                        <FeatherIcon icon="chevron-right" />
                        :
                        <Switch
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            uncheckedIcon={null}
                            checkedIcon={null}
                            height={30}
                            onColor="#5786f8"
                            
                        />
                }
            </div>
        </div>
    )
}

export default ProfileListCard