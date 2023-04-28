import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import VegDiet from "./VegDiet"
import NonVegDiet from "./NonVeg"


export default class Diet extends Component {
  render() {
    return (
    <ScrollView style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Card>
            <Card.Title>Vegetarian Diet</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, width:'100%', height:100}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWi11jHGGn_LtXMN4m-trBTujWQ59iftAcA&usqp=CAU',
              }}
            />
            
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Check the veg diet"
              onPress={()=>{
                this.props.navigation.navigate("VegDiet")
              }}
            
            />
          </Card>
        </View>
        <View style={{ marginTop: 20 }}>
             <Card>
            <Card.Title>Non-Vegetarian Diet</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0,width:'100%', height:100 }}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Check the non-veg diet"
               onPress={()=>{
                this.props.navigation.navigate("NonVegDiet")
              }}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    height: 80,
    padding: 10,
    borderColor: 'black',
    fontSize: 18,
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: '#5653D4',
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
    color: 'white',
  },
  button: {
    width: '43%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F48D20',
    borderRadius: 15,
    marginTop: 20,
  },
});
