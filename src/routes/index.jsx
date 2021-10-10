import { Route, Switch } from "react-router";
import { Confraternization } from "../pages/Confraternization";
import { Home } from '../pages/Home';
import { Graduation } from "../pages/Graduation";
import { Wedding } from '../pages/Wedding';
import { Contact } from "../pages/Contact";


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
            <Route exact path='/contact'>
                <Contact />
            </Route>
        </Switch>
    )
}