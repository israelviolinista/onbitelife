import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { View,ScrollView,Text,Image } from "react-native";
//função para iniciar todas 
export default function Start(){
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../assets/icons/logo3.png")}
                />
                <Text>
                    Vamos transformar sua vida {"/n"} em jogo , buscando sempre{"/n"} o melhor nível!
                </Text>
                </View>
            </ScrollView>
        
        </View>
    )
}