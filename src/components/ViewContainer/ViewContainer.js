import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import appBgImage from '../../images/app-blue-bg.png';


const styles = ({ spacing }) => ({
    container: {
        position: 'relative'
    },
    image: {
        width: '100%',
        height: 'auto',
        maxHeight: `calc(100vh - ${spacing(10)}px)`, // navbar height
        position: 'absolute',
        zIndex: 0
    },
    content: {
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    }
});

const ViewContainer = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <img
                src={appBgImage}
                className={classes.image}
                alt="Sing4Moon"
            />
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};

ViewContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(ViewContainer);
