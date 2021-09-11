import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import BottomTabNavigator from "./BottomTabNavigator"

const Layout = (props) => {

    return (
        <div className="w-100 layout">
            <div className="layout-body">
                {props.children}
            </div>
            <BottomTabNavigator />
        </div>
    )
}

export default Layout