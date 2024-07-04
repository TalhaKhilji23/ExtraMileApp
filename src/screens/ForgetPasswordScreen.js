import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {IconButton, TextInput} from 'react-native-paper';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../../firebase';

const ForgetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState(false);
  const handleSendCode = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent!');
        navigation.navigate('Login', {msg: 'Password reset email sent!'});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <View style={styles.container} rippleColor="rgba(0, 0, 0, .32)">
      <IconButton
        icon="chevron-left"
        color="black"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container2}>
        <Text style={styles.urbanist}>Forgot Password?</Text>
        <Text style={styles.smalltext}>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Enter your email"
          placeholderTextColor="#8391A1"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={styles.codebtn}
          theme={{borderRadius: 0}}
          onPress={() => handleSendCode()}>
          <Text style={styles.btntext}>Send Code</Text>
        </TouchableOpacity>
        <View style={styles.noaccountview}>
          <Text style={styles.urbanisttext}>Remember Password? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.registerbtn}>
            <Text style={styles.registertxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  urbanist: {
    color: 'black',
    fontFamily: 'Urbanist-Bold',
    fontSize: 26,
    marginTop: 20,
    width: '80%',
  },
  smalltext: {
    color: '#8391A1',
    fontFamily: 'Urbanist-Regular',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
    width: '80%',
  },
  whisper: {
    fontFamily: 'Whisper',
    fontSize: 50,
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    backgroundColor: '#F7F8F9',
    marginTop: 50,
  },
  codebtn: {
    width: '80%',
    marginTop: 20,
    backgroundColor: '#282931',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  btntext: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    borderRadius: 1,
  },
  forgetbtn: {
    alignSelf: 'flex-end',
    marginRight: '10%',
  },
  forgettxt: {
    color: '#8391A1',
    fontSize: 14,
    textAlign: 'right',
  },
  noaccountview: {
    flexDirection: 'row',
    marginTop: 30,
  },
  registerbtn: {
    marginLeft: 1,
  },
  registertxt: {
    fontFamily: 'Urbanist-Bold',
  },
  urbanisttext: {
    fontFamily: 'Urbanist-Regular',
  },
});
