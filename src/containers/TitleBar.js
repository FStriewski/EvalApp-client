import React, { PureComponent } from 'react'
import School from '@material-ui/icons/School';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

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
};


export default class TitleBar extends PureComponent {
  state = {
      anchorEl: null,
  };

    handleChange = (event, checked) => {
        this.setState({
            auth: checked
        });
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
                <a id ="batchesLink" className="navbar-brand" href="/batches">
                              Student Evaluations
                </a>

                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><a id="batchesLink" href="/batches"> Batches</a></MenuItem>
                  <MenuItem onClick={this.handleClose}><a id="logoutLink" href="/logout"> Logout</a></MenuItem>
                </Menu>

            </nav>
            
        )
    }
}
