import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'native-base';

const LoaderSpinner = ( props ) => {
    return (
        <View style={ styles.spinnerStyle }>
            <ActivityIndicator size={ props.size || 'large'} />
        </View>
    );
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default LoaderSpinner;