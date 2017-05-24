import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

// TODO: real icons + colors
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0 10px 0 0'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const LeftNav = () => (
  <Paper style={style.paper}>
    <Menu>
      <MenuItem primaryText="Dashboard" leftIcon={<PersonAdd />} />
      <MenuItem primaryText="Scratchpad" leftIcon={<PersonAdd />} />
      <Divider />
      <MenuItem primaryText="Universes" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Characters" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Locations" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Items" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Creatures" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Races" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Religions" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Groups" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Magics" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Languages" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Scenes" leftIcon={<ContentCopy />} />
    </Menu>
  </Paper>
);

export default LeftNav;