import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing }) => ({
    copyrightContainer: {
        marginTop: spacing(2),
        textAlign: 'center'
    }
});

const Copyright = props => {
    const { classes } = props;
    const currentYear = new Date().getFullYear();

    return (
        <div className={classes.copyrightContainer}>
            {`© ${currentYear} Sing4Moon. All rights reserved.`}
        </div>
    );
};

Copyright.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Copyright);
