import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HomeDetail from "../json/HomeDetail";

const AlbumList = () => {
    return (
    <ScrollView>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
                <View style={styles.leftStyle}>
                    <Image
                    source={{
                        uri: HomeDetail[0].thumbnail_image
                    }}
                    style={{ width: 40, height: 40 }}/>
                    <Text style={styles.headTexttStyle}>{HomeDetail[0].title}</Text>
                </View>
                <Image
                source={{
                    uri: HomeDetail[0].more
                }}
                style={{ width: 40, height: 40 }}/>
            
            </View>
            <View style={styles.cardSectionStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={{
                    uri: HomeDetail[0].image
                    }}
                    />
            </View> 
            <View  style={styles.dowmStyle}>
                <View  style={styles.dowm_leftStyle}>
                    <Image
                        source={{
                            uri: HomeDetail[0].heart
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[0].talk
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[0].send
                        }}
                        style={{ width: 36, height: 36 }}/>
                </View> 
                <Image
                        source={{
                            uri: HomeDetail[0].tag
                        }}
                        style={{ width: 36, height: 36 }}/>
            </View> 
            <View style={styles.TextboxStyle}>
                <Text style={styles.TexttStyle}>{HomeDetail[0].good}</Text>
                <Text style={styles.TexttStyle}>{HomeDetail[0].intro}</Text>
            </View>
        </View>
        
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
                <View style={styles.leftStyle}>
                    <Image
                    source={{
                        uri: HomeDetail[1].thumbnail_image
                    }}
                    style={{ width: 40, height: 40 }}/>
                    <Text style={styles.headTexttStyle}>{HomeDetail[1].title}</Text>
                </View>
                <Image
                source={{
                    uri: HomeDetail[0].more
                }}
                style={{ width: 40, height: 40 }}/>
          
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: HomeDetail[1].image
                }}
                />
            </View> 
            <View  style={styles.dowmStyle}>
                <View  style={styles.dowm_leftStyle}>
                    <Image
                        source={{
                            uri: HomeDetail[1].heart
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[1].talk
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[1].send
                        }}
                        style={{ width: 36, height: 36 }}/>
                </View> 
                <Image
                        source={{
                            uri: HomeDetail[1].tag
                        }}
                        style={{ width: 36, height: 36 }}/>
            </View> 
            <View style={styles.TextboxStyle}>
                <Text style={styles.TexttStyle}>{HomeDetail[1].good}</Text>
                <Text style={styles.TexttStyle}>{HomeDetail[1].intro}</Text>
            </View>  
        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
                <View style={styles.leftStyle}>
                    <Image
                    source={{
                        uri: HomeDetail[2].thumbnail_image
                    }}
                    style={{ width: 40, height: 40 }}/>
                    <Text style={styles.headTexttStyle}>{HomeDetail[2].title}</Text>
                </View>
                <Image
                source={{
                    uri: HomeDetail[0].more
                }}
                style={{ width: 40, height: 40 }}/>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: HomeDetail[2].image
                }}

                />
            </View>   
            <View  style={styles.dowmStyle}>
                <View  style={styles.dowm_leftStyle}>
                    <Image
                        source={{
                            uri: HomeDetail[2].heart
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[2].talk
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[2].send
                        }}
                        style={{ width: 36, height: 36 }}/>
                </View> 
                <Image
                        source={{
                            uri: HomeDetail[2].tag
                        }}
                        style={{ width: 36, height: 36 }}/>
            </View> 
            <View style={styles.TextboxStyle}>
                <Text style={styles.TexttStyle}>{HomeDetail[2].good}</Text>
                <Text style={styles.TexttStyle}>{HomeDetail[2].intro}</Text>
            </View>
        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
                <View style={styles.leftStyle}>
                    <Image
                    source={{
                        uri: HomeDetail[3].thumbnail_image
                    }}
                    style={{ width: 40, height: 40 }}/>
                    <Text style={styles.headTexttStyle}>{HomeDetail[3].title}</Text>
                </View>
                <Image
                source={{
                    uri: HomeDetail[0].more
                }}
                style={{ width: 40, height: 40 }}/>
           
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: HomeDetail[3].image
                }}

                />
            </View>   
            <View  style={styles.dowmStyle}>
                <View  style={styles.dowm_leftStyle}>
                    <Image
                        source={{
                            uri: HomeDetail[3].heart
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[3].talk
                        }}
                        style={{ width: 36, height: 36 }}/>
                    <Image
                        source={{
                            uri: HomeDetail[3].send
                        }}
                        style={{ width: 36, height: 36 }}/>
                </View> 
                <Image
                        source={{
                            uri: HomeDetail[3].tag
                        }}
                        style={{ width: 36, height: 36 }}/>
            </View> 
            <View style={styles.TextboxStyle}>
                <Text style={styles.TexttStyle}>{HomeDetail[3].good}</Text>
                <Text style={styles.TexttStyle}>{HomeDetail[3].intro}</Text>
            </View>
        </View>
        <View style={{height:130}}>

        </View>

    </ScrollView>





    );
};

const styles = StyleSheet.create({
      leftStyle: {
        alignItems:"center",
        flexDirection: "row",
      },
      imageStyle: {
        width:null,
        height:300,

      },
    
      faceStyle: {
        height:52,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft:14,
        paddingRight:14
      },
    
      headTexttStyle: {
        fontWeight:"bold",
        fontSize:13,
        color:'#000',
        marginLeft:20, 
      },
      dowmStyle:{
        paddingLeft:8,
        paddingRight:8,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      dowm_leftStyle:{
        flexDirection: "row",
      },
      TextboxStyle:{
        marginBottom:8,
      },
      TexttStyle:{
        fontWeight:"bold",
        fontSize:14,
        marginRight:14,
        marginLeft:14,
        marginTop:8,
      }
});

export default AlbumList;