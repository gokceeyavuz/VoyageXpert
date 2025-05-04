import {
  Alert,
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
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    if (!email.trim()) {
      Alert.alert('Hata', 'Email boş olamaz!');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Hata', 'Geçerli bir email adresi giriniz!');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Hata', 'Şifre boş olamaz!');
      return;
    }

    // Eğer tüm kontroller geçtiyse giriş yap
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('login2');
  };
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
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}></TextInput>
      </View>
      <View style={style.userAlani}></View>
      <View style={style.passwordAlani}>
        <View style={style.usernameText}>
          <TextInput
            style={style.password}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
            value={password}
            onChangeText={setPassword}></TextInput>
        </View>
        <View style={style.userAlani2}></View>
        <TouchableOpacity
          style={style.loginAlani}
          onPress={handleSignIn}>
          <Text style={style.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View>
          <Text style={style.forgetpassword}>Şifreni mi unuttun?</Text>
        </View>
      </View>
      <View style={style.alan2}>
        <View>
          <Text style={style.createText}>Hesabın yok mu?</Text>
        </View>
        <TouchableOpacity
          style={style.createAlani}
          onPress={() => navigation.navigate('kayitOl')}>
          <Text style={style.loginText}>Create</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default index;

const styles = StyleSheet.create({});
