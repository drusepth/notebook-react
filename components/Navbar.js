import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import VpnLock from 'material-ui/svg-icons/notification/vpn-lock';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navbar = () => (
  <AppBar
    title={<span style={styles.title}>Notebook.ai</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><VpnLock /></IconButton>}
    iconElementRight={<FlatButton label="Log in" />}
  />
);

export default Navbar;