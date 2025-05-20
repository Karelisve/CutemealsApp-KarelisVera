import React from "react";
import Home from "./../screens/Home";
import Recipes from "./../screens/Recipes";
import Profile from "./../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const HomeNavigator = () =>  {
    return (
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Home") {
                iconName = "home-outline";
                } else if (route.name === "Recipes") {
                iconName = "book-outline";
                } else if (route.name === "Profile") {
                iconName = "person-outline";
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#2C1516", // Color activo
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                backgroundColor: "#F8DFDF", // Fondo de la barra 
                borderTopWidth: 0, // Quita la línea superior
                height: 60, // Ajusta la altura
                paddingBottom: 10, // Espacio inferior para mejor visualización
            },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Recipes" component={Recipes} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigator;