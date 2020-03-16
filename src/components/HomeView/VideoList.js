import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import pick from 'lodash/pick';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import LoadingCircle from '../common/LoadingCircle';
import VideoItem from './VideoItem';


const styles = ({ spacing }) => ({
    title: {
        color: 'white',
        marginTop: spacing(2)
    },
    listContainer: {},
    item: {
        display: 'flex',
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

const getVideoCountText = videoCount => {
    if (videoCount === 0) {
        return 'No videos found. Try searching for a different song or artist.';
    }
    return videoCount === 1
        ? `Found ${videoCount} song`
        : `Found ${videoCount} songs`
};

const VideoList = props => {
    if (props.isLoading) {
        return <LoadingCircle />;
    }
    const { classes } = props;

    return (
        <Fragment>
            <Typography variant="h5" className={classes.title}>
                {getVideoCountText(props.videoItems.length)}
            </Typography>
            <div className={classes.listContainer}>
                <VideoItem
                    title="test"
                    thumbnails={{ medium: { url: '' } }}
                    id={'asd'}
                />
                {map(props.videoItems, ({ id, snippet }) => (
                    <VideoItem
                        {...pick(snippet, [
                            'title',
                            'thumbnails',
                            'publishedAt'
                        ])}
                        key={id.videoId}
                        id={id.videoId}
                    />
                ))}
            </div>
        </Fragment>
    )
};

VideoList.propTypes = {

};

export default withStyles(styles)(VideoList);
