import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constant/Colors'
import Button from './../../components/Shared/Button'
import { useRouter } from 'expo-router'

const Intro = ({course}) => {
  const router = useRouter();
  
  const getBannerImage = (imagePath) => {
    if (!imagePath) return imageAssets.banner1;
    const key = imagePath.replace('/', '').replace('.png', '');
    return imageAssets[key] || imageAssets.banner1;
  };

  return (
    <View style={styles.container}>
      <Image 
        source={getBannerImage(course?.banner_image)}
        style={styles.bannerImage}
        resizeMode="cover"
        defaultSource={imageAssets.banner1}
      />
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {course?.courseTitle}
        </Text>
        
        <View style={styles.chapterInfo}>
          <Ionicons name="book-outline" size={20} color="black" />
          <Text style={styles.chapterCount}>
            {course?.chapters?.length || 0} Chapters
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Description:
        </Text>
      
        <Text 
          numberOfLines={2}
          style={styles.description}
        >
          {course?.description}
        </Text>
      
        <Button 
          text={'Start Now'}
          onPress={() => console.log('Start course')}
        />
      </View>

      <Pressable 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={25} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  bannerImage: {
    width: '100%',
    height: 280
  },
  contentContainer: {
    padding: 20
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 25
  },
  chapterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5
  },
  chapterCount: {
    fontFamily: 'outfit-regular',
    fontSize: 18
  },
  sectionTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginTop: 10
  },
  description: {
    fontFamily: 'outfit-regular',
    fontSize: 18,
    color: Colors.GREY,
    marginBottom: 10
  },
  backButton: {
    position: 'absolute',
    padding: 10,
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20
  }
});

export default Intro;