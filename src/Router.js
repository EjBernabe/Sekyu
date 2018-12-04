import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import App from './Containers/App';
import Login from './Containers/Login/Login';

import Admin from './Containers/Administrator/Admin';
import UsersManagement from './Containers/Administrator/UsersManagement/UsersManagement';
import NewUser from './Containers/Administrator/UsersManagement/NewUser/NewUser';
import VehiclesManagement from './Containers/Administrator/VehiclesManagement/VehiclesManagement';
import ReportsManagement from './Containers/Administrator/ReportsManagement/ReportsManagement';

import Homeowner from './Containers/Homeowner/Homeowner';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root"> 
                <Scene hideNavBar key="appScene">
                    <Scene
                        key="App" 
                        component={ App } />
                </Scene>

                <Scene hideNavBar key="authScene">
                    <Scene 
                        key="Login" 
                        component={ Login } 
                        title="Login" />
                </Scene>        

                <Scene  hideNavBar key="adminScene">
                    <Scene 
                        key="AdminHome" 
                        component={ Admin } />

                    <Scene  hideNavBar key="usersMgmtScene">
                        <Scene 
                            key="UsersManagement" 
                            component={ UsersManagement } />    
                        
                        <Scene 
                            key="NewUser"
                            component={ NewUser } />
                    </Scene>
                    
                    <Scene hideNavBar key="vehiclesMgmtScene">
                        <Scene
                            key="VehiclesManagement" 
                            component={ VehiclesManagement } 
                            title="Vehicles" />
                    </Scene>

                    <Scene key="reportsMgmtScene">
                        <Scene hideNavBar={false}
                            key="ReportsManagement" 
                            component={ ReportsManagement } 
                            title="Reports" />
                    </Scene>
                </Scene>

                <Scene initial hideNavBar key="homeownerScene">
                    <Scene 
                        key="HomeownerHome"
                        component={ Homeowner }
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;