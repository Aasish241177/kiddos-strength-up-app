import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import {firebase} from 'firebase';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = async (email, password) => {
    //Add code for firebase authentication
    try{
      await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in
console.log("hi")
        this.props.navigation.navigate('Tabs');
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    }catch(error){
      var errorMessage = error.message;
        alert("hello "+errorMessage);
    }
    
  };
  render() {
    return (
      <View style={{ marginTop: 10 }}>
      <Image source={require('../assets/snack-icon.png')} style={{width:120, height:120, alignSelf:"center", margin:25}}/>
        <TextInput
          style={styles.fox}
          onChangeText={(text) => this.setState({ email: text })}
          placeholderTextColor={'white'}
          placeholder={'Enter email'}
        />
        <TextInput
          style={styles.fox}
          onChangeText={(text) => this.setState({ password: text })}
          placeholder={'Enter Password'}
          placeholderTextColor={'white'}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.handleLogin(this.state.email, this.state.password)
          }>
          <Text style={{ color: 'white', fontSize: 20 }}> Login</Text>
        </TouchableOpacity>
        <View style={{  margin: 10, alignSelf:"center"}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              alignSelf: 'center',
            }}>
            Dont have an account,
          </Text>
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Registration');
              }}>
              <Text
                style={{ fontSize: 20, color: 'blue', alignSelf: 'center' }}>Click here</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fox: {
    borderWidth: 4,
    borderRadius: 10,
    width: 300,
    height: 80,
    padding: 10,
    borderColor: 'black',
    fontSize: 18,
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: '#5653D4',
    alignSelf: 'center',
    margin: 20,
    color: 'white',
  },
  button: {
    width: '43%',
    height: 55,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F48D20',
    borderRadius: 15,
    alignSelf: 'center',
  },
});
