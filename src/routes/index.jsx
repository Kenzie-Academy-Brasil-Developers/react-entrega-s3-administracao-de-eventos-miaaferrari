import { Route, Switch } from "react-router";
import { Confraternization } from "../pages/Confraternization";
import { Home } from '../pages/Home';
import { Graduation } from "../pages/Graduation";
import { Wedding } from '../pages/Wedding';

export const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/confraternization'> 
                <Confraternization />
            </Route>
            <Route exact path='/graduation'>
                <Graduation />
            </Route>
            <Route exact path='/wedding'>
                <Wedding />
            </Route>
        </Switch>
    )
}