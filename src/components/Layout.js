import BottomTabNavigator from "./BottomTabNavigator"

const Layout = (props) => {
    return (
        <div className="w-100">
            <div>
                {props.children}
            </div>
            <BottomTabNavigator />
        </div>
    )
}

export default Layout