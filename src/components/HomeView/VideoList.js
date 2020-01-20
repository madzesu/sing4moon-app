import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import pick from 'lodash/pick';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import VideoItem from './VideoItem';


const styles = ({ spacing }) => ({
    title: {
        color: 'white'
    },
    container: {
    },
    item: {
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

const VideoList = props => {
    const { classes } = props;
    return (
        <Fragment>
            <Typography variant="h5" className={classes.title}>
                Songs found:
            </Typography>
            <div className={classes.container}>
                {map(props.data.items, ({ id, snippet }, i) => (
                    <VideoItem
                        {...pick(id, ['videoId'])}
                        {...pick(snippet, [
                            'title',
                            'thumbnails',
                            'publishedAt'
                        ])}
                        key={i}
                    />
                ))}
            </div>
        </Fragment>
    )
};

VideoList.propTypes = {

};

export default withStyles(styles)(VideoList);
