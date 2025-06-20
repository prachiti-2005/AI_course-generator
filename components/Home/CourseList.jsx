import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Colors from './../../constant/Colors';
import { imageAssets } from './../../constant/Option';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

const CourseList = ({ courseList }) => {
  const router = useRouter();

  const getBannerImage = (imagePath) => {
    if (!imagePath) return imageAssets.banner1; // Default fallback
    const key = imagePath.replace('/', '').replace('.png', '');
    return imageAssets[key] || imageAssets.banner1; // Fallback if key not found
  };

  // const  GetCourseById = async() => {
  //   const docRef = await getDoc(doc(db,'Courses',courseId));
  //   const courseData = docRef.data();
  // }

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => router.push({
        pathname: '/courseView',
        params: {
          courseParams: JSON.stringify(item)
        }
      })}
      style={styles.courseContainer}
    >
      <Image 
        source={getBannerImage(item.banner_image)}
        style={styles.courseImage}
        resizeMode="cover"
        defaultSource={imageAssets.banner1} // Fallback image while loading
      />
      <Text style={styles.courseTitle}>
        {item?.courseTitle}
      </Text>
      
      <View style={styles.chapterInfo}>
        <Ionicons name="book-outline" size={20} color="black" />
        <Text style={styles.chapterText}>
          {item?.chapters?.length || 0} Chapters
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Courses</Text>
      
      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    marginBottom: 10
  },
  courseContainer: {
    padding: 10,
    backgroundColor: Colors.BG_GREY,
    margin: 6,
    borderRadius: 15,
    width: 260,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 15
  },
  courseTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    marginTop: 10
  },
  chapterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5
  },
  chapterText: {
    fontFamily: 'outfit-regular'
  },
  listContainer: {
    paddingHorizontal: 5
  }
});

export default CourseList;

