import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { youTubeAPIKey, sing4MoonChannelId } from '../../credentials';

import grey from '@material-ui/core/colors/grey';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import VideoList from './VideoList';


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
    },
    searchContainer: {
        marginTop: spacing(11.5)
    },
    formControlRoot: {
        // marginLeft: spacing(0.5)
    },
    inputLabelRoot: {
        color: grey[100],
        fontSize: 24,
        transform: 'none !important',
        top: spacing(-4.5),
        left: -3,
        textShadow: '1px 1px 1px black'
    },
    inputRoot: {
        background: grey[100],
        fontSize: 20,
        padding: '8px 12px'
    }
});

const useFetch = url => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const newData = await response.json();
            setData(newData);
        }
        fetchData();
    }, [url]);

    return data;
};

const HomeView = props => {
    const { classes } = props;
    const [inputValue, setInputValue] = useState('');

    const url = 'https://www.googleapis.com/youtube/v3/search'
        + `?channelId=${sing4MoonChannelId}`
        + `&key=${youTubeAPIKey}`
        + '&part=snippet,id'
        + '&order=date'
        + '&maxResults=10'
        + `&query=${inputValue}`;

    const data = useFetch(url);

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
            <div className={classes.searchContainer}>
                <FormControl
                    fullWidth
                    classes={{ root: classes.formControlRoot }}
                >
                    <InputLabel
                        shrink
                        classes={{ root: classes.inputLabelRoot }}
                        htmlFor="search-field"
                    >
                        <Typography variant="h4">Find your song:</Typography>
                    </InputLabel>
                    <Input
                        autoFocus
                        fullWidth
                        id="search-field"
                        placeholder="Search by song title or artist name..."
                        value={inputValue}
                        onChange={onInputChange}
                        classes={{ root: classes.inputRoot }}
                    />
                </FormControl>
            </div>
            <VideoList data={data} />
        </div>
    )
};

HomeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeView);
