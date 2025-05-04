import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getHotels} from '../../services/amadeus'; // amadeus.js içindeki fonksiyonu import ediyoruz

const DenizOtelScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latitude = 41.397158; // Verdiğiniz koordinatlar
        const longitude = 2.160873; // Verdiğiniz koordinatlar

        const hotelData = await getHotels(latitude, longitude); // Otel verisini alıyoruz
        console.log('Otel Verisi:', hotelData);
        setData(hotelData); // Veriyi state'e atıyoruz
      } catch (err) {
        console.error('Veri alma hatası:', err);
        setError(err); // Hata varsa error state'ini güncelliyoruz
      } finally {
        setLoading(false); // Veri çekildikten sonra loading durumu false olacak
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırıyoruz
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Hata: {error.message}</Text>
      </View>
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{uri: item.media[0]?.uri}} // Otelin görselini alıyoruz, media[0]?.uri
        style={styles.image}
      />
      <Text style={styles.hotelName}>{item.name}</Text>
      <Text style={styles.address}>
        {item.address?.lines?.join(', ') || 'Adres bulunamadı'}
      </Text>
      <Text style={styles.stars}>
        {item.rating ? `⭐ ${item.rating}` : 'Yıldız: Veritabanında yok'}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={data} // Hotel verisini veriyoruz
      renderItem={renderItem} // Her bir oteli render ediyoruz
      keyExtractor={(item, index) => index.toString()} // Her bir item için benzersiz anahtar
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  stars: {
    fontSize: 16,
    color: '#FFD700',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default DenizOtelScreen;
