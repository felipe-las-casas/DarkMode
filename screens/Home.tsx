import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function Home() {
  const [lightMode, setLightMode] = useState(true);
  
  
  return (
    <View style={lightMode ?
       styles.light :
       styles.dark}>
        <View style={styles.container}>
        <View style={styles.align}>
        <Text style={styles.title}>Title</Text>
        {
          lightMode ? <TouchableOpacity onPress={() => setLightMode(!lightMode)}><Entypo name="light-up" size={40} color="black" /></TouchableOpacity> : <TouchableOpacity onPress={() => setLightMode(!lightMode)}><Entypo name="moon" size={40} color="white" /></TouchableOpacity>
        }
      </View>
      <ScrollView>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rutrum ex, sed dapibus erat. Pellentesque ut arcu lorem. Ut congue sagittis urna vitae commodo. Nam malesuada turpis urna, fringilla ornare tortor laoreet ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in euismod nunc. Nullam at hendrerit tortor.
        </Text>
        <Text style={styles.text}>
          Proin eu rutrum lectus, eget feugiat mi. Aliquam lacinia dui et lectus ultrices, non auctor ligula dignissim. Nam urna dui, tincidunt id ornare ut, condimentum pellentesque diam. Vestibulum et magna nec lacus gravida convallis et nec magna. Ut scelerisque, libero id ultricies maximus, dui nisi faucibus nisi, et vehicula odio nisl et est. Nunc sit amet ornare enim, vitae posuere mi. Integer ac lacus enim. Suspendisse et orci euismod, ultrices lectus non, sagittis sapien. Integer sollicitudin libero quis erat vulputate, quis congue arcu malesuada.
        </Text>
        <Text style={styles.text}>
          Aenean nisi orci, vehicula non iaculis in, aliquet quis nisl. Aenean non ultrices magna. Mauris elementum condimentum lacus, iaculis commodo dui feugiat eu. Pellentesque tempor rutrum felis porttitor ullamcorper. Curabitur a ipsum scelerisque ligula dictum aliquam et in lacus. Curabitur dui lectus, hendrerit eget dolor ac, gravida consectetur sapien. Vivamus convallis, libero vel dapibus ultrices, enim sem ultricies nulla, quis sagittis tellus nulla sed nisi. Aenean porttitor at odio ac vestibulum. Ut nulla massa, cursus ut erat sit amet, vehicula mattis felis. Aliquam sit amet luctus odio. Nulla nec ligula vel erat lobortis varius.
        </Text>
        <Text style={styles.text}>
          Proin eu rutrum lectus, eget feugiat mi. Aliquam lacinia dui et lectus ultrices, non auctor ligula dignissim. Nam urna dui, tincidunt id ornare ut, condimentum pellentesque diam. Vestibulum et magna nec lacus gravida convallis et nec magna. Ut scelerisque, libero id ultricies maximus, dui nisi faucibus nisi, et vehicula odio nisl et est. Nunc sit amet ornare enim, vitae posuere mi. Integer ac lacus enim. Suspendisse et orci euismod, ultrices lectus non, sagittis sapien. Integer sollicitudin libero quis erat vulputate, quis congue arcu malesuada.
        </Text>
      </ScrollView>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff',
  },
  image: {
    width: 300,
  },
  text: {
    marginVertical: 10,
  },
  title: {
    fontSize: 40
  },
  align: {
    marginVertical: 30,
    flexDirection: 'row',
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
