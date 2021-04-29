import { Component } from "react";
import React from "react";
import { View, Text, Image, Dimensions, AsyncStorage, Platform, PermissionsAndroid } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Geolocation from 'react-native-geolocation-service';

interface Props {
    navigation: any;
}
interface State {
}

export default class PermissionPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {

    }
   
    setPermission = async () => {
        
        if (Platform.OS === "ios") {
            Geolocation.requestAuthorization('always').then((res) => {
                alert(res)
                console.log(res);
              });
              AsyncStorage.setItem('isPermissionGiven','1')
              this.props.navigation.navigate('HomePage')
            // Geolocation.getCurrentPosition(
            //    (position) => {
            //        console.log(position);
            //    },
            //    (error) => {
            //      console.log("map error: ",error);
            //        console.log(error.code, error.message);
            //    },
            //    { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 })
        } else {
            try {
                const granted = await PermissionsAndroid.requestMultiple([
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                ]).then((result) => {
                  console.log(result);
                  if (
                    result['android.permission.ACCESS_COARSE_LOCATION'] &&
                    result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
                  ) {
                    AsyncStorage.setItem('isPermissionGiven','1')
                    this.props.navigation.navigate('HomePage')
                  }
                });
              } catch (err) {
                console.warn(err);
                }
        }

    }
    render() {
        const data = 'PrettyLittleThing is a eCommerce retailer, who has marketing at the heart of everything we do. The advertising related changes in iOS 14 could have a big impact on our business unless we have permission to track our users. We need to request users explicit permission to track advertising related information.'
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 50 }}>
                    <Image style={{ width: 50, height: 50 }}
                        source={require('../assets/splash.png')} />
                    <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 30 }}>User Track</Text>
                </View>
                <Text style={{ margin: 20 }}>{data}</Text>
                <TouchableOpacity onPress={this.setPermission} style={{ backgroundColor: '#111DD8', height: 50, margin: 20 }}>
                    <Text style={{ color: '#ffffff', textAlign: 'center', marginTop: 15, fontWeight: 'bold' }}>Continue</Text>
                </TouchableOpacity>

            </View>
        )
    }
}