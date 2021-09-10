import CloudUserInfo from "../components/CloudUserInfo"
import Sheet from "../components/Sheet"

const HomeScreen = (props) => {
    return (
        <div className="home">
            <CloudUserInfo />
            <Sheet />
        </div>
    )
}

export default HomeScreen