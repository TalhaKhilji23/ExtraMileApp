import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, database} from '../../../firebase';
import {onValue, ref} from 'firebase/database';

const AdminLoginScreen = ({navigation, route}) => {
  const {msg} = route.params ? route.params : {msg: ''};
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const loginUser = async () => {
    const adminRef = ref(database, 'users/admin');
    onValue(adminRef, snapshot => {
      const data = snapshot.val();
      if (email === data.email) {
        signInWithEmailAndPassword(auth, email, pass)
          .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(`${errorCode} Error: ${errorMessage}`);
          });
      }
    });
  };
  return (
    <View style={styles.container}>
      <IconButton
        icon="chevron-left"
        color="black"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container2}>
        <Text style={styles.urbanist}>Welcome to</Text>
        <Text style={styles.whisper}>ExtraMile Admin</Text>
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
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Enter your password"
          placeholderTextColor="#8391A1"
          secureTextEntry={!showPass}
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setShowPass(!showPass)}
            />
          }
          value={pass}
          onChangeText={setPass}
        />
        <TouchableOpacity
          style={styles.forgetbtn}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgettxt}>Forgot Password?</Text>
        </TouchableOpacity>
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
        {msg && (
          <Chip
            icon="information"
            mode="outlined"
            closeIcon="close"
            onClose={() => navigation.navigate('Login')}
            onPress={() => console.log('Pressed')}
            style={styles.chipstyle}>
            {msg}
          </Chip>
        )}
        <TouchableOpacity
          style={styles.loginbtn}
          theme={{borderRadius: 0}}
          onPress={() => loginUser()}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <View style={styles.noaccountview}>
          <Text style={styles.urbanisttext}>Login as user here: </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.registerbtn}>
            <Text style={styles.registertxt}>User Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminLoginScreen;

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
    marginTop: 50,
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
