import React from 'react';
import PropTypes from 'prop-types';

import join from 'lodash/join';
import omit from 'lodash/omit';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = ({ spacing }) => ({
    container: {
        display: 'flex',
        padding: `${spacing(3)}px 0px`
    },
    loadingCircle: {
        margin: 'auto'
    },
});

const LoadingCircle = props => {
    const { classes } = props;
    const classNames = [classes.loadingCircle];
    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <div className={classes.container}>
            <CircularProgress
                {...omit(props, ['classes', 'className'])}
                className={join(classNames, ' ')}
            />
        </div>
    )
};

LoadingCircle.defaultProps = {
    size: 64,
    color: 'secondary'
}

LoadingCircle.propTypes = {
    classes: PropTypes.object.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string
};

export default withStyles(styles)(LoadingCircle);
