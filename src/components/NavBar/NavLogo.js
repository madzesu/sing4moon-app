import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';

import { VIEW_ROUTES } from '../../constants';


const styles = () => ({
    container: {
        color: grey[100],
        textDecoration: 'none'
    }
});

const NavLogo = props => {
    const { classes } = props;

    return (
        <Link
            to={VIEW_ROUTES.HOME.PATH}
            className={classes.container}
        >
            Sing4Moon
        </Link>
    )
};

NavLogo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavLogo);
