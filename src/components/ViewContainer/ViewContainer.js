import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import appBgImage from '../../images/app-blue-bg.png';
import Footer from '../Footer';


const styles = ({ spacing }) => ({
    container: {
        position: 'relative'
    },
    image: {
        width: '100%',
        height: 'auto',
        maxHeight: '100vh', // calc(100vh - ${spacing(10)}px)`, // navbar height
        position: 'fixed',
        top: 0,
        zIndex: 0
    },
    content: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
    },
    viewContent: {
        minHeight: `calc(100vh - ${spacing(20)}px)`,
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
                <div className={classes.viewContent}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
};

ViewContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(ViewContainer);
