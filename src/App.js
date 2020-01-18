import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import ThemeProvider from './ThemeProvider';
import NavBar from './components/NavBar';

import ViewContainer from './components/ViewContainer';
import HomeView from './components/HomeView';
import SongListView from './components/SongListView';
import ContactView from './components/ContactView';
import { VIEW_ROUTES } from './constants';



const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <NavBar />
                <ViewContainer>
                    <Switch>
                        <Route
                            exact
                            path={VIEW_ROUTES.HOME.PATH}
                            component={HomeView}
                        />
                        <Route
                            path={VIEW_ROUTES.SONG_LIST.PATH}
                            component={SongListView}
                        />
                        <Route
                            path={VIEW_ROUTES.CONTACT.PATH}
                            component={ContactView}
                        />
                    </Switch>
                </ViewContainer>
            </Router>
        </ThemeProvider>
    );
}

export default App;
