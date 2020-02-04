import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
        <div>
            <AppBar>
                <Tabs>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><Tab label="&nbsp;Sellwell&nbsp;" /></Link>
                <Link to="/accounts" style={{ textDecoration: 'none', color: 'white' }}><Tab label="&nbsp;Accounts&nbsp;" /></Link>
                <Link to="/contacts" style={{ textDecoration: 'none', color: 'white' }}><Tab label="&nbsp;Contacts&nbsp;" /></Link>
                <Link to="/opportunities" style={{ textDecoration: 'none', color: 'white' }}><Tab label="&nbsp;Opportunities&nbsp;" /></Link>
                <Link to="/activities" style={{ textDecoration: 'none', color: 'white' }}><Tab label="&nbsp;Activities&nbsp;" /></Link>
                </Tabs>
            </AppBar>
            <br></br>
            <br></br>
            <br></br>  
        </div>
    )
  }
}

export default NavBar