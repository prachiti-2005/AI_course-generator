import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { PracticeOption } from '../../constant/Option';
import Colors from '../../constant/Colors';
import { useRouter } from 'expo-router';

const PracticeSection = () => {
  const router = useRouter();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity 
      onPress={() => router.push('/practice/'+item.name)} 
      style={{
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden'  // This ensures the image respects borderRadius
      }}
    >
      <Image 
        source={item.image} 
        style={{
          width: '100%',
          height: '100%',
          maxHeight: 160,
        }}
        resizeMode="cover"
      />
      <Text style={{
        position: 'absolute',
        padding: 15,
        fontFamily: 'outfit-regular',
        fontSize: 15,
        color: Colors.WHITE,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
      }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 25,
        marginBottom: 10
      }}>
        Practice
      </Text>

      <FlatList
        data={PracticeOption}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  )
}

export default PracticeSection;