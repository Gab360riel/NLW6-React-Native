import React from "react";

import {createStackNavigator} from '@react-navigation/stack'

import { theme } from "../global/styles/theme";

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { Background } from "../components/Background";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary90
                },
                headerShown: false
            }}
        >
             <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
             <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}