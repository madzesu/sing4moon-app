import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing, palette }) => ({
    container: {
        color: 'inherit'
    },
    header: {
        marginBottom: spacing(1.5)
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: palette.primary.main
        }
    }
});

const links = [
    {
        children: 'YouTube',
        href: 'https://www.youtube.com/channel/UCu2YhywZvs7pXUEL3RCUEaA'
    },
    {
        children: 'Patreon',
        href: 'https://www.patreon.com/join/sing4moon'
    },
    {
        children: 'Instagram',
        href: 'https://www.instagram.com/sing4moon/'
    }
];

const SocialMediaLinks = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Typography
                variant="h5"
                className={classes.header}
            >
                Social Media
            </Typography>
            {map(links, link => (
                <div>
                    <Typography
                        {...link}
                        component="a"
                        target="_blank"
                        className={classes.link}
                    />
                </div>
            ))}
        </div>
    )
};

SocialMediaLinks.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialMediaLinks);
