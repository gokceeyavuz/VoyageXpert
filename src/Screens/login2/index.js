import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';

const index = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (
      !firstName ||
      !lastName ||
      !number ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Hata', 'Geçerli bir email adresi giriniz.');
      return;
    }

    if (number.length < 10) {
      Alert.alert('Hata', 'Telefon numarası en az 10 haneli olmalıdır.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor.');
      return;
    }

    Alert.alert('Başarılı', 'Kayıt başarılı!');
    navigation.navigate('login2');
  };

  return (
    <ScrollView>
      <LinearGradient
        style={style.gradient}
        colors={['#82A9FF', '#EDE2FF']}
        start={{x: 0.5, y: 1.06}}
        end={{x: 1.3, y: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('back')}>
          <Image style={style.menuIcons} source={icons.arrow}></Image>
        </TouchableOpacity>
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
            placeholderTextColor="white"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={style.userAlani}></View>

        <View style={style.passwordAlani}>
          <View style={style.usernameText}>
            <TextInput
              style={style.password}
              placeholder="Soyisim"
              placeholderTextColor="white"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={style.userAlani2}></View>

          <View style={style.passwordAlani}>
            <View style={style.usernameText}>
              <TextInput
                style={style.password}
                placeholder="Telefon Numarası"
                placeholderTextColor="white"
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
              />
            </View>
          </View>

          <View style={style.userAlani2}></View>

          <View style={style.passwordAlani}>
            <View style={style.usernameText}>
              <TextInput
                style={style.password}
                placeholder="Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
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
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View style={style.userAlani2}></View>

          <View style={style.passwordAlani}>
            <View style={style.usernameText}>
              <TextInput
                style={style.password}
                placeholder="Şifre Tekrar"
                placeholderTextColor="white"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>

          <View style={style.userAlani2}></View>

          <TouchableOpacity style={style.loginAlani} onPress={handleRegister}>
            <Text style={style.loginText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;
