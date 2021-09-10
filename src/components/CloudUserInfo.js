import { useEffect, useState } from "react"
import ButtonRectangle from "./ButtonRectangle"

const CloudUserInfo = (props) => {
    const [ filledStorage, setFilledStorage ] = useState(60)

    useEffect(() => {
        
        let progressShown = document.querySelector(".progress-shown")
        progressShown.style.width = `${filledStorage}%`
    }, [])

    return (
        <div className="cloud-user_info">
            <div className="cloud-user_info_name-sec">
                <h3 className="text-white cloud-user_info_name">
                    Hello Jessie
                </h3>
                <p className="text-accent">
                    at the moment you have
                </p>
            </div>
            <div className="flex flex-center justify-between cloud-user_info_det">
                <div>
                    <h3 className="cloud-user_info_storage text-white">
                        32.5 GB <span className="text-accent">of 100 GB free</span>
                    </h3>
                </div>
                <div>
                    <ButtonRectangle />
                </div>
            </div>
            <div className="progress">
                <span className="progress-shown"></span>
            </div>
        </div>
    )
}

export default CloudUserInfo