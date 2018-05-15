import React, { PureComponent } from 'react'
import School from '@material-ui/icons/School';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import * as combine from "lodash/fp/compose"

import '../styles/style.css'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
    }
};


 class TitleBar extends PureComponent {
  state = {
      anchorEl: null,
  };

    handleMenu = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };

    render() {
            const {  classes } = this.props;
            const { anchorEl } = this.state;
            const open = Boolean(anchorEl);

        return (
                <nav id="titlebar" className="navbar">
                <School id="batchesIcon" ></School>
                
                <div className={classes.title}> Student Evaluations </div>

                <IconButton
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><a id="batchesLink" className={classes.menuItem} href="/batches"> Batches</a></MenuItem>
                    <MenuItem onClick={this.handleClose}><a id="logoutLink" className={classes.menuItem} href="/logout"> Logout</a></MenuItem>
                </Menu>

            </nav>
            
        )
    }
}

export default combine(
    withStyles(styles),
)(TitleBar)