import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';

const index = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  return (
    <LinearGradient
      style={style.gradient}
      colors={['#82A9FF', '#EDE2FF']}
      start={{x: 0.5, y: 1.06}}
      end={{x: 1.3, y: 1}}>
      <LinearGradient
        style={style.logoBox}
        colors={['#82A9FF', '#EDE2FF']}
        start={{x: 0.5, y: 1.4}}
        end={{x: 1.5, y: 1}}>
        <Text style={style.logoBoxText}>VX</Text>
      </LinearGradient>
      <View style={style.textBar}>
        <Text style={style.text1}>V</Text>
        <Text style={style.text2}>oyage</Text>
        <Text style={style.text1}>X</Text>
        <Text style={style.text2}>pert</Text>
      </View>
      <View>
        <Text style={style.TextWelcome}>Hoşgeldiniz</Text>
      </View>
      <View>
        <TextInput
          style={style.userName}
          placeholder="İsim"
          placeholderTextColor="white"></TextInput>
      </View>
      <View style={style.userAlani}></View>
      <View style={style.passwordAlani}>
        <View style={style.usernameText}>
          <TextInput
            style={style.password}
            placeholder="Soyisim"
            placeholderTextColor="white"></TextInput>
        </View>
        <View style={style.userAlani2}></View>
        <View style={style.passwordAlani}>
          <View style={style.usernameText}>
            <TextInput
              style={style.password}
              placeholder="Telefon Numarası"
              placeholderTextColor="white"
              value={number}
              onChangeText={setNumber}></TextInput>
          </View>
        </View>
        <View style={style.userAlani2}></View>
        <View style={style.passwordAlani}>
          <View style={style.usernameText}>
            <TextInput
              style={style.password}
              placeholder="Email"
              placeholderTextColor="white"
              value={email}
              onChangeText={setEmail}></TextInput>
          </View>
        </View>
        <View style={style.userAlani2}></View>
        <View style={style.passwordAlani}>
          <View style={style.usernameText}>
            <TextInput
              style={style.password}
              placeholder="Şifre"
              placeholderTextColor="white"
              secureTextEntry
              value={password}
              onChangeText={setPassword}></TextInput>
          </View>{' '}
        </View>
        <View style={style.userAlani2}></View>
        <TouchableOpacity
          style={style.loginAlani}
          onPress={() => navigation.navigate('login2')}>
          <Text style={style.loginText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default index;

const styles = StyleSheet.create({});
