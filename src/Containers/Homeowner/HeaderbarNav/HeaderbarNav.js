import React, { Component } from 'react';
import { Drawer } from "native-base";

import SidebarNav from '../SidebarNav/SidebarNav';
import SidebarToggler from '../SidebarNav/SidebarToggler/SidebarToggler';

Drawer.defaultProps.styles.mainOverlay.elevation = 0;

class HeaderbarNav extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    render () {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SidebarNav />}
                onClose={this.closeDrawer.bind()} >
                <SidebarToggler openDrawer={this.openDrawer.bind(this)} />
            </Drawer>
        ); 
    }
}

export default HeaderbarNav;