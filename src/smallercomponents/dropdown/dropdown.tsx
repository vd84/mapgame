import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const categories = [
    'Coffee',
    'Bar',
    'Electronics',
];

function getStyles(name: string, categoryChosen: string | any[], theme: Theme) {
    return {
        fontWeight:
            categoryChosen.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [categoryChosen, setCategoryChosen] = React.useState([]);

    const handleChange = (event: any) => {
        setCategoryChosen(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={categoryChosen}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {categories.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, categoryChosen, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}