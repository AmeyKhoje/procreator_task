import { Route, Switch, Redirect } from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import LocalStorage from "../pages/LocalStorage"
import Layout from "./Layout"

const RouterComponent = () => {
    return (
        <Switch>
            <RouterWrapper exact path="/home" component={HomeScreen} layout={Layout} />
            <RouterWrapper exact path="/local-storage" component={LocalStorage} layout={Layout} />
            <Redirect to="/home" />
        </Switch>
    )
}

export const RouterWrapper = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route { ...rest } render={(props) =>
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
            }
        />
    )
}

export default RouterComponent