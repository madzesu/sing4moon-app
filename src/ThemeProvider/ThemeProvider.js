import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';


const ThemeProvider = props => {
    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    )
};

ThemeProvider.propTypes = {
    children: PropTypes.any
};

export default ThemeProvider;
