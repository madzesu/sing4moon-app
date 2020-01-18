import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import { Link } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing, palette }) => ({
    container: {
        color: grey[100],
        textDecoration: 'none',
        margin: `0px ${spacing(2)}px`,
        '&:hover': {
            color: palette.secondary.light
        },
        '&.active': {
            color: palette.secondary.main
        }
    }
});

const NavLink = props => {
    const { classes } = props;
    const classNames = [classes.container];
    if (props.isActive) {
        classNames.push('active');
    }

    return (
        <Link
            to={props.to}
            className={join(classNames, ' ')}
        >
            <Typography>{props.label}</Typography>
        </Link>
    )
};

NavLink.propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string,
    children: PropTypes.any,
    isActive: PropTypes.bool
};

export default withStyles(styles)(NavLink);
