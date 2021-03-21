import * as React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Image, Button, View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem } from '../Interfaces/ListItem';

export function PhotoDetails({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#fff',

  },
  image: {
    width: 270,
    height: 170,
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