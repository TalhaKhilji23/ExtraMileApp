import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth, database} from '../../firebase';
import {ref, set} from 'firebase/database';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const registerUser = async () => {
    if (
      username !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            updateProfile(auth.currentUser, {
              displayName: username,
            }).then(() => {
              console.log('Username added.');
            });
            set(ref(database, 'users/' + user.uid), {
              username: username,
              email: email,
            });
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(`${errorCode} Error: ${errorMessage}`);
          });
      } else {
        setErrorMsg('Password must be equal to confirm password!');
      }
    } else {
      setErrorMsg('Fields cannot be empty!');
    }
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
        <Text style={styles.urbanist}>Hello! Register to get started</Text>
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Username"
          placeholderTextColor="#8391A1"
          value={username}
          onChangeText={setUsername}
          textContentType="username"
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Email"
          placeholderTextColor="#8391A1"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Password"
          placeholderTextColor="#8391A1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
          autoComplete="off"
          textContentType="password"
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
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPass}
          autoComplete="off"
          textContentType="password"
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
          onPress={() => registerUser()}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
        <View style={styles.noaccountview}>
          <Text style={styles.urbanisttext}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.registerbtn}>
            <Text style={styles.registertxt}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

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
    marginVertical: 20,
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
