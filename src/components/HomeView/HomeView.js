import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography, Input, FormControl, InputLabel } from '@material-ui/core';


const styles = ({ spacing }) => ({
    container: {
        // minHeight:
        width: '50%',
        margin: 'auto'
    },
    titleContainer: {
        color: grey[50]
    },
    logo: {
        marginTop: '12vh'
    },
    searchContainer: {
        marginTop: spacing(11.5)
    },
    formControlRoot: {
        marginLeft: spacing(0.5)
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

const HomeView = props => {
    const { classes } = props;
    const [inputValue, setInputValue] = useState('');

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
        </div>
    )
};

HomeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeView);
