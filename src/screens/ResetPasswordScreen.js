import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Chip, IconButton, TextInput} from 'react-native-paper';

const ResetPasswordScreen = ({navigation}) => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <View style={styles.container} rippleColor="rgba(0, 0, 0, .32)">
      <IconButton
        icon="chevron-left"
        color="black"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container2}>
        <Text style={styles.urbanist}>Create new password</Text>
        <Text style={styles.smalltext}>
          Your new password must be unique from those previously used.
        </Text>
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="New Password"
          placeholderTextColor="#8391A1"
          secureTextEntry={!showPass}
          value={password}
          onChangeText={setPassword}
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Confirm Password"
          placeholderTextColor="#8391A1"
          secureTextEntry={!showPass}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        {errorMsg === '' ? null : (
          <Chip
            icon="information"
            closeIcon="close"
            onClose={() => setErrorMsg('')}
            onPress={() => console.log('Pressed')}
            style={styles.chipstyle}>
            {errorMsg}
          </Chip>
        )}
        <TouchableOpacity
          style={styles.loginbtn}
          theme={{borderRadius: 0}}
          onPress={() => navigation.navigate('PasswordChanged')}>
          <Text style={styles.btntext}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

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
    marginVertical: 5,
  },
  loginbtn: {
    width: '80%',
    marginTop: 50,
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
    fontFamily: 'Urbanist-Regular',
  },
  registertxt: {
    fontFamily: 'Urbanist-Bold',
  },
  urbanisttext: {
    fontFamily: 'Urbanist-Regular',
  },
  chipstyle: {
    height: 40,
    width: '80%',
    marginTop: 10,
  },
});
