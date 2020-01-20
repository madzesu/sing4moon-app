import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import unescape from 'lodash/unescape';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core';


const styles = ({ spacing }) => ({
    paper: {
        display: 'flex',
        // width: '100%',
        margin: `${spacing(2)}px 0px`,
        padding: `${spacing(1.5)}px ${spacing(1.5)}px`,
        background: 'white',
        justifyContent: 'flex-start'
    },
    videoThumbnail: {
        maxWidth: spacing(25)
    },
    videoDetails: {
        marginLeft: spacing(2)
    },
    videoTitle: {
        marginBottom: spacing(1.5)
    }
});

const dateFromNow = date => moment(date).fromNow();

const formatDate = (date, format = 'Do of MMM YYYY') => moment(date).format(format);

const VideoItem = props => {
    const { classes } = props;

    return (
        <Paper
            className={classes.paper}
            elevation={5}
            component={ButtonBase}
            href={`https://youtube.com/watch?v=${props.videoId}`}
            target="_blank"
        >
            <img
                alt={props.title}
                src={props.thumbnails.medium.url}
                className={classes.videoThumbnail}
            />
            <div className={classes.videoDetails}>
                <Typography variant="h6" className={classes.videoTitle}>
                    {unescape(props.title)}
                </Typography>
                <Typography variant="caption">
                    Published: {formatDate(props.publishedAt)} ({dateFromNow(props.publishedAt)})
                </Typography>
            </div>
        </Paper>
    )
};

const thumbnailPropTypes = PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
});

VideoItem.propTypes = {
    classes: PropTypes.object.isRequired,
    videoId: PropTypes.string,
    thumbnails: PropTypes.shape({
        default: thumbnailPropTypes,
        medium: thumbnailPropTypes,
        high: thumbnailPropTypes
    }),
    publishedAt: PropTypes.string,
    title: PropTypes.string
};

export default withStyles(styles)(VideoItem);
