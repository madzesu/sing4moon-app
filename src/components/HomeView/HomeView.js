import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../../axios';

import filter from 'lodash/filter';
import includes from 'lodash/includes';
import get from 'lodash/get';
import toLower from 'lodash/toLower';

import { youTubeAPIKey, sing4MoonChannelId } from '../../credentials';

import grey from '@material-ui/core/colors/grey';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import VideoList from './VideoList';
import SongSearchInput from './SongSearchInput';


const styles = ({ spacing }) => ({
    container: {
        // minHeight:
        width: '60%',
        margin: 'auto'
    },
    titleContainer: {
        color: grey[50],
        marginLeft: spacing(-0.5)
    },
    logo: {
        marginTop: '12vh'
    }
});

const fetchVideos = (url, urlParams, videoItems, callback) => {
    axios.get(`${url}${urlParams}`)
        .then(response => {
            const { data } = response;
            const nextToken = get(data, 'nextPageToken');
            const newVideoItems = videoItems.concat(get(data, 'items', []));
            const tokenUrlParam = `&pageToken=${nextToken}`;
            if (!nextToken) {
                callback(newVideoItems);
            } else {
                fetchVideos(url, tokenUrlParam, newVideoItems, callback);
            }
        })
        .catch(error => {
            console.log('error:', error);
        });
};

const useFetch = (url) => {
    // todo: create api call to check newest video date and compare to local storage date.
    const initialItems = JSON.parse(localStorage.getItem('videoData')) || [];
    const [data, setData] = useState({
        items: initialItems,
        isLoading: initialItems.length === 0
    });

    useEffect(() => {
        if (data.isLoading) {
            const callback = videoItems => {
                // todo: add storing date to storage
                localStorage.setItem('videoData', JSON.stringify(videoItems));
                setData({
                    items: videoItems,
                    isLoading: false
                });
            };
            fetchVideos(url, '', data.items, callback);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return data;
};

const useFetchVideos = () => {
    const url = 'search'
        + `?channelId=${sing4MoonChannelId}`
        + '&type=video'
        + `&key=${youTubeAPIKey}`
        + '&part=snippet,id'
        + '&order=date'
        + '&maxResults=50';
    return useFetch(url);
};

const getVideoItems = (videoItems, inputFilter) => {
    if (!inputFilter) {
        return videoItems;
    }
    return filter(videoItems, ({ snippet }) =>
        includes(toLower(snippet.title), toLower(inputFilter))
    );
};

const HomeView = props => {
    const { classes } = props;
    const [inputValue, setInputValue] = useState('');

    const data = useFetchVideos();

    // todo: add debounce 200ms
    const onInputChange = e => {
        setInputValue(e.target.value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography variant="h1" className={classes.logo}>
                    Sing4Moon
                </Typography>
                <Typography variant="h3">
                    Best karaoke experience
                </Typography>
            </div>
            <SongSearchInput
                value={inputValue}
                onChange={onInputChange}
            />
            <VideoList
                isLoading={data.isLoading}
                videoItems={getVideoItems(get(data, 'items'), inputValue)}
            />
        </div>
    )
};

HomeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeView);
