import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import SocialMediaLinks from './SocialMediaLinks';
import Copyright from './Copyright';


const styles = ({ spacing, palette }) => ({
    container: {
        padding: `${spacing(8)}px ${spacing(4)}px`,
        background: 'black',
        color: 'white',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    divider: {
        background: '#001938',
        margin: `${spacing(5)}px 0px`
    }
});

const Footer = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <SocialMediaLinks />
            <Divider className={classes.divider} />
            <Copyright />
        </div>
    )
};

Footer.propTypes = {

};

export default withStyles(styles)(Footer);
