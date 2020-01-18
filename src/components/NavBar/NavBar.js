import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { useLocation } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import NavLogo from './NavLogo';
import NavLink from './NavLink';
import navLinks from './navLinks';


const styles = ({ spacing }) => ({
    container: {
        height: spacing(10),
        background: '#001938',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        width: `calc(100% - ${spacing(10)}px)`,
        padding: `0px ${spacing(5)}px`
    },
    linkContainer: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    }
});

const NavBar = props => {
    const { classes } = props;
    const location = useLocation();

    return (
        <div className={classes.container}>
            <NavLogo />
            <div className={classes.linkContainer}>
                {map(navLinks, (link, i) => (
                    <NavLink
                        {...link}
                        key={i}
                        isActive={(link.to === location.pathname)}
                    />
                ))}
            </div>
        </div>
    );
};

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
