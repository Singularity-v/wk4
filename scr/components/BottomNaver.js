import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const BottomNaver = () => {
  return (
    <View style={styles.viewStyle}>
        <View style={styles.box}>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/home_nav.png"}}
            />
            </View>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/search_nav.png"}}
            />
            </View>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/add_nav.png"}}
            />
            </View>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/heart_nav.png"}}
            />
            </View>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/per.nav.png"}}
            />
            </View>
        </View>
    </View>
   );
 };

 const styles = StyleSheet.create({
    viewStyle: {
        elevation:2,
        position:"absolute",
        top:-132
    },
    box:{
        backgroundColor:"#FAFAFA",
        width:360,
        height:56,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        
        elevation:5,
    },
    iconStyle:{
        width:40,
        height:40,
    },
   center:{
    alignItems: 'center',
    justifyContent:'center',
   },

 });

 export default BottomNaver;