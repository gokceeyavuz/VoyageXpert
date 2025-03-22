import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../assets/images';

const index = () => {
  const [text, setText] = useState('');

  return (
    <View style={style.backgrounnddd}>
      <View style={style.alan1}>
        <Image style={style.menuIcons} source={icons.menu}></Image>
        <View style={style.textBar}>
          <Text style={style.text1}>V</Text>
          <Text style={style.text2}>oyage</Text>
          <Text style={style.text1}>X</Text>
          <Text style={style.text2}>pert</Text>
        </View>
        <Image style={style.iconsBell} source={icons.bell}></Image>
      </View>
      <LinearGradient
        style={style.line}
        colors={['#82A9FF', '#EDE2FF']}
        start={{x: 0.5, y: 1.1}}
        end={{x: 0.8, y: 1}}></LinearGradient>
      <View>
        <Text style={style.textGreet}>Selam Gökçe!</Text>
      </View>
      <View>
        <Text style={style.textHaydi}>Haydi Başlayalım!</Text>
      </View>
      <View style={style.alan2}>
        <View style={style.alan2Yan}>
          <Image style={style.searchicons} source={icons.search}></Image>
          <TextInput
            style={style.inputText}
            placeholder="Nereye Gitmek istersiniz?"
            placeholderTextColor="#948D8D"
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
      <ScrollView>
        <ScrollView horizontal={true} style={style.alan3Scrooll}>
          <View style={style.alan3ScrollTextAlani}>
            <View style={style.daire1}>
              <Image source={images.colessum} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Roma,İtaly</Text>
          </View>
          <View style={style.alan3ScrollTextAlani}>
            <View style={style.daire1}>
              <Image source={images.amalfi} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Amalfi,İtaly</Text>
          </View>
          <View style={style.alan3ScrollTextAlani}>
            <View style={style.daire1}>
              <Image source={images.kass2} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Kas,Antalya</Text>
          </View>
          <View style={style.alan3ScrollTextAlani}>
            <View style={style.daire1}>
              <Image source={images.rize3} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Ayder,Rize</Text>
          </View>
          <View style={style.alan3ScrollTextAlani}>
            <View style={style.daire1}>
              <Image source={images.izmiir2} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Konak,İzmir</Text>
          </View>
          <View style={style.alan3ScrollTextAlani}> 
            <View style={style.daire1}>
              <Image source={images.pisa} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Pisa,İtaly</Text>
          </View>
        </ScrollView>

        <View style={style.alan4}>
          <Text style={style.alan4Text1}>Sizin için Öneriler</Text>
          <Text style={style.alan4Text2}>Hepsini Keşfet</Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              gap: 13,
              flexDirection: 'row',
              marginTop: 14,
              marginLeft: 12,
            }}>
            <View>
              <ImageBackground
                source={images.aquapark}
                style={style.imageBack}
                borderRadius={22}>
                <TouchableOpacity style={style.alan5Daire} width={12} height={14}>
                  <Image source={icons.like} style={style.hearticon}></Image>
                </TouchableOpacity>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>AquaPark Otelleri</Text>
                </View>
              </ImageBackground>
            </View>

            <ImageBackground
              source={images.termal}
              borderRadius={22}
              style={style.imageBack}>
               <TouchableOpacity style={style.alan5Daire} width={12} height={14}>
                  <Image source={icons.like} style={style.hearticon}></Image>
                </TouchableOpacity>
              <View style={style.imageAciklama}>
                <Image source={icons.pin} style={style.circleicon}></Image>
                <Text style={style.circleText}>Termal Otelleri</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={icons.balayı}
              style={style.imageBack}
              borderRadius={22}>
               <TouchableOpacity style={style.alan5Daire} width={12} height={14}>
                  <Image source={icons.like} style={style.hearticon}></Image>
                </TouchableOpacity>
              <View style={style.imageAciklama}>
                <Image source={icons.pin} style={style.circleicon}></Image>
                <Text style={style.circleText}>Balayı Otelleri</Text>
              </View>
            </ImageBackground>

            <ImageBackground
              source={images.paris}
              style={style.imageBack}
              borderRadius={22}>
               <TouchableOpacity style={style.alan5Daire} width={12} height={14}>
                  <Image source={icons.like} style={style.hearticon}></Image>
                </TouchableOpacity>
              <View style={style.imageAciklama}>
                <Image source={icons.pin} style={style.circleicon}></Image>
                <Text style={style.circleText}>YurtDışı Otelleri</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>

        <View style={style.alan4}>
          <Text style={style.alan4Text1}>Popüler Yerler </Text>
          <Text style={style.alan4Text2}>Hepsini Keşfet</Text>
        </View>
        <ScrollView>
          <View style={style.images2}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.amalfi} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Güneş, Deniz, Tatil!</Text>
                <Text style={style.text34}>
                  Sıcak plajlar, berrak denizler{' '}
                </Text>
                <Text style={style.text34}>mükemmel yaz destinasyonlarını</Text>
                <Text style={style.text34}>keşfet.</Text>
              </View>
            </View>
          </View>
          <View style={style.images2}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.kayak} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Karla Kaplı Cennetler!</Text>
                <Text style={style.text34}>Kayak, kar manzaraları</Text>
                <Text style={style.text34}>
                  Sıcak dağ evleriyle kış tatilinin
                </Text>
                <Text style={style.text34}>keyfini çıkar.</Text>
              </View>
            </View>
          </View>
          <View style={style.images2}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.yurtdisi} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Dünya Senin Olsun!</Text>
                <Text style={style.text34}>Yeni kültürler keşfet, tarihi </Text>
                <Text style={style.text34}>
                  {' '}
                  yerleri gez.Yurtdışında benzersiz{' '}
                </Text>
                <Text style={style.text34}> deneyimler seni bekliyor.</Text>
              </View>
            </View>
          </View>
          <View style={style.images2}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.cruise} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Denizin Üzerinde Lüks! </Text>
                <Text style={style.text34}>
                  Sadece deniz, siz ve keşfedilecek{' '}
                </Text>
                <Text style={style.text34}>eşsiz rotalar seni bekliyor!</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
