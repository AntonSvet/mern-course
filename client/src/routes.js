import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/links";
import {CreatePage} from "./pages/create";
import {DetailPage} from "./pages/Detail";
import {AuthPage} from "./pages/Authpage";
export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
            <Route path="/links" exact>
                <LinksPage />
            </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}