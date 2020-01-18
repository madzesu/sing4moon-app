import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import overrides from './overrides';
import palette from './palette';


const theme = createMuiTheme({
    overrides,
    palette
});

export default theme;
