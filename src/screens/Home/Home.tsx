import React from "react";
import {Text, View} from "react-native";
import styles from './Style';
import { Menu } from "../../components/Menu/Menu";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
                <BatTextInput/>
                <BatButton/>
            </View>
        </View>

    )
}
