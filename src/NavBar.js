import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'

class NavBar extends React.Component {
  render() {
    return (
        <div>
            <AppBar>
                <Tabs>
                <Tab label="&nbsp;Sellwell&nbsp;" />
                <Tab label="&nbsp;Accounts&nbsp;" />
                <Tab label="&nbsp;Contacts&nbsp;" />
                <Tab label="&nbsp;Opportunities&nbsp;" />
                <Tab label="&nbsp;Activities&nbsp;" />
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
