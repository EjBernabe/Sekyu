import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';

import App from './Containers/App';
import Login from './Containers/Login/Login';

import Admin from './Containers/Administrator/Admin';
import UsersManagement from './Containers/Administrator/UsersManagement/UsersManagement';
import NewUser from './Containers/Administrator/UsersManagement/NewUser/NewUser';
import VehiclesManagement from './Containers/Administrator/VehiclesManagement/VehiclesManagement';
import ReportsManagement from './Containers/Administrator/ReportsManagement/ReportsManagement';

import Homeowner from './Containers/Homeowner/Homeowner';
import HomeownerMenu from './Containers/Homeowner/HomeownerMenu/HomeownerMenu';
import AdvancedList from './Containers/Homeowner/AdvanceForm/AdvancedList/AdvancedList';

import Guard from './Containers/Guard/Guard';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#3F51B5' }}>
            <Scene key="root"> 
                <Scene
                    key="Main" 
                    component={ App } 
                    hideNavBar />

                <Scene
                    key="Login" 
                    component={ Login } 
                    hideNavBar />

                {/* admin start */}
                <Scene 
                    key="AdminHome" 
                    component={ Admin } />

                    <Scene 
                        key="UsersManagement" 
                        component={ UsersManagement } />    
                    
                    <Scene 
                        key="NewUser"
                        component={ NewUser } />

                    <Scene
                        key="VehiclesManagement" 
                        component={ VehiclesManagement } 
                        title="Vehicles" />
                
                    <Scene hideNavBar={false}
                        key="ReportsManagement" 
                        component={ ReportsManagement } 
                        title="Reports" />

                {/* admin end */}

                <Scene
                    initial
                    key="HomeownerDrawer"
                    drawer
                    contentComponent={ HomeownerMenu }
                    drawerIcon={<Icon name='menu' style={{fontSize: 30, color: '#FFF'}}/>}
                    drawerWidth={300}
                    hideNavBar
                >
                        <Scene initial
                            key="HomeownerHome"
                            component={ Homeowner }
                        />

                        <Scene
                            key="AdvancedList"
                            component={ AdvancedList }
                        />
                </Scene>

                <Scene 
                    key="GuardHome"
                    component={ Guard }
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;