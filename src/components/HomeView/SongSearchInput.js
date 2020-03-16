import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';

import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


const styles = ({ spacing }) => ({
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

const SongSearchInput = props => {
    const { classes } = props;

    return (
        <div className={classes.searchContainer}>
            <FormControl
                fullWidth={props.fullWidth}
                classes={{ root: classes.formControlRoot }}
            >
                <InputLabel
                    shrink={props.shrink}
                    htmlFor={props.id}
                    classes={{ root: classes.inputLabelRoot }}
                >
                    <Typography variant={props.labelVariant}>
                        {props.label}
                    </Typography>
                </InputLabel>
                <Input
                    {...pick(props, [
                        'autoFocus',
                        'id',
                        'value',
                        'onChange',
                        'placeholder'
                    ])}
                    classes={{ root: classes.inputRoot }}
                />
            </FormControl>
        </div>
    );
};

SongSearchInput.defaultProps = {
    id: 'search-field',
    label: 'Find your song:',
    labelVariant: 'h4',
    placeholder: 'Search by song title or artist name...',
    autoFocus: true,
    fullWidth: true,
    shrink: true
};

SongSearchInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    labelVariant: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    fullWidth: PropTypes.bool
};

export default withStyles(styles)(SongSearchInput);
