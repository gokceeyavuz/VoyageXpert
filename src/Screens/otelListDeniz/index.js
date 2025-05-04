import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = () => {
  const Amadeus = require('amadeus');

  
  async function main() {
    try {
      // List of hotels in Paris
      const response =
        await amadeus.referenceData.locations.hotels.byGeocode.get({
          latitude: 48.83152,
          longitude: 2.24691,
        });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  main();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Otel Listesi</Text>
      {hotels && hotels.length > 0 ? (
        hotels.map((hotel, index) => (
          <View key={index} style={styles.hotelCard}>
            <Text style={styles.hotelName}>{hotel.name}</Text>
            <Text style={styles.hotelDetails}>
              {hotel.address || 'Adres bilgisi mevcut değil.'}
            </Text>
          </View>
        ))
      ) : (
        <Text>No hotels found.</Text>
      )}
    </ScrollView>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  hotelCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hotelDetails: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
