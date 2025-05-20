import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { colors } from '../global/colors';
import { Feather, Ionicons } from "@expo/vector-icons";

const AnimatedSearchBar = () => {
    const [text, setText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const animatedBorder = useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedBorder, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
    }).start();
    };

    const handleBlur = () => {
    setIsFocused(false);
    if (text === "") {
        Animated.timing(animatedBorder, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        }).start();
    }
    };

    const handleReset = () => {
    setText("");
    Animated.timing(animatedBorder, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
    }).start();
    };

    const borderScale = animatedBorder.interpolate({
    inputRange: [0, 1],
    outputRange: ["scaleX(0)", "scaleX(1)"],
    });

    return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Feather name="search" size={18} color="#331919" style={styles.icon} />

        <TextInput
            style={styles.input}
            placeholder="Buscar receta"
            placeholderTextColor="#a79595"
            value={text}
            onChangeText={setText}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />

        {text.length > 0 && (
            <TouchableOpacity onPress={handleReset} style={styles.reset}>
            <Ionicons name="close" size={20} color="#331919" />
            </TouchableOpacity>
        )}

        <Animated.View
            style={[
            styles.animatedBorder,
            { transform: [{ scaleX: animatedBorder }] },
            ]}
        />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
    },
    inputContainer: {
        position: "relative",
        width: 300,
        height: 50,
        borderRadius: 30,
        backgroundColor: colors.background,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#0002",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 2,
        overflow: "hidden",
        borderWidth: 1.5,
        borderColor: colors.primary,
    },
    input: {
        flex: 1,
        fontSize: 14,
        height: "100%",
        paddingVertical: 4,
        paddingHorizontal: 3,
        color: "#333",
    },
    icon: {
        marginRight: 8,
        marginLeft: 10,
    },
    reset: {
        marginLeft: 6,
    },
    animatedBorder: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 2,
        width: "100%",
        backgroundColor: colors.accent,
        borderRadius: 1,
        transform: [{ scaleX: 0 }],
    },
});

export default AnimatedSearchBar;
