import React, {useEffect, useState} from "react";
import {ListItem} from "../Interfaces/ListItem";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PhotoDetails } from "./PhotoDetails";

export function PhotosList() {
    const Stack = createStackNavigator();
       return (
            <Stack.Navigator>
                <Stack.Screen name="PhotosList" component={Photos} />
                <Stack.Screen name="PhotoDetails" component={PhotoDetails} />
            </Stack.Navigator>
    );
}

export function Photos({ navigation }) {
    const url = "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20";
    const [dataList, setDataList] = useState<ListItem[]>([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json: []) => {
                setDataList(json);
            });
    }, []);

    const loadMorePhotos = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json: []) => {
                let newDataList = [...dataList, ...json]
                setDataList(newDataList);
            });
    }

    return (
        <View style={styles.container}>
            {
                <FlatList
                    onEndReached={loadMorePhotos}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                    data={dataList}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('PhotoDetails', {item: item})}>
                                <Image source={{ uri: item.url }} style={styles.image} />
                            </TouchableOpacity>
                        )
                    }
                    }
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#fff',

    },
    image: {
        width: 170,
        height: 100,
        margin: 5,
    },
    list: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        marginTop: 20,
        marginBottom: 10
    }
});
