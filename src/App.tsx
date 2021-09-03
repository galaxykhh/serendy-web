import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { theme } from './style/theme';
import LandingPage from './pages/LandingPage';

const App: React.FC = observer(() => {
    return (
        <>
            <ThemeProvider theme={theme} >
                <GlobalStyle />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
});

export default App;
