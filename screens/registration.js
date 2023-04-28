import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      conformPassward: '',
      name: '',
      mobileNumber: '',
    };
  }

  handleRegistrartion = async (email, password, confirm, name, mobile) => {
    if (password !== confirm) {
      Alert.alert('Password doesnt match', 'Please check your password', [
        { text: 'Ok' },
      ]);
    } else {
      //Add code for firebase authentication
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.firestore().collection('users')
          .doc(firebase.auth().currectUser.uid)
          .set({
            name: name,
            mobile: mobile,
            email:email
          })
          this.props.navigation.navigate('Tabs');
          // ...
          
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })}
            placeholder={'Enter your Name'}
            placeholderTextColor={'#ddd'}
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ mobileNumber: text })}
            placeholder={'Enter Mobile. No'}
            placeholderTextColor={'#ddd'}
            keyboardType="number"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ email: text })}
            placeholderTextColor={'#ddd'}
            placeholder={'Enter Email'}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder={'Enter Password'}
            placeholderTextColor={'#ddd'}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ conformPassword: text })}
            placeholder={' Confirm Password'}
            placeholderTextColor={'#ddd'}
            secureTextEntry
          />
        </View>
        <View style={{ flex: 0.2, alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              !this.state.name ||
              !this.state.mobileNumber ||
              !this.state.email ||
              !this.state.password ||
              !this.state.conformPassward
                ? Alert.alert(
                    'Kindly check the input fields',
                    'All fields are mandatory',
                    [{ text: 'Ok' }]
                  )
                : this.handleRegistrartion(
                    this.state.email,
                    this.state.password,
                    this.state.conformPassward,
                    this.state.name,
                    this.state.mobileNumber
                  );
            }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
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
