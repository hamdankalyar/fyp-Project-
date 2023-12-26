import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../constants/GlobalStyles";
import CardHeading from "../components/heading/car/CardHeading";
import Card from "../components/card/Cards";
import cardDataJSON from "../data/carCard.json";
import { useState } from "react";
const MainScreen = () => {
    const [cardData, setCardData] = useState(cardDataJSON);
  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.homeScreenChild}
        contentFit="contain"
        source={require("../assets/Ballons.jpg")}
      />
      <Text style={styles.travelix}>Travelix</Text>
      <Image
        style={styles.profileIcon}
        contentFit="cover"
        source={require("../assets/icons/profile-icon.png")}
      />
      <View style={[styles.component2, styles.componentLayout]}>
        <Pressable style={styles.component2Child} onPress={() => {}} />
        <Text style={[styles.hotel, styles.hotelLayout]}>Travel</Text>
      </View>
      <Pressable
        style={[styles.component3, styles.componentLayout]}
        onPress={() => {}}
      >
        <View style={styles.component2Child} />
        <Text style={[styles.hotel, styles.hotelLayout]}>Hotel</Text>
      </Pressable>
      <Pressable
        style={[styles.component4, styles.componentLayout]}
        onPress={() => {}}
      >
        <View style={styles.component2Child} />
        <Text style={[styles.hotel, styles.hotelLayout]}>{`Cars`}</Text>
      </Pressable>
      
      
      <Text style={styles.exploreStayDrive}>
        Explore, Stay, Drive, Discover.
      </Text>
      <Text style={[styles.seamlessTravelExperiences, styles.hotel1Typo]}>
        Seamless travel experiences with hotels, car rentals, and exploration
        services.
      </Text>
     <View style={{flex:1,marginHorizontal:15}}>

     <CardHeading heading="Top Rated Cars" subHeading="213 cars in Lahore"/>
     <Card cardData={cardData} />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({

 
  

  //needed
  homeScreen: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  homeScreenChild: {
    height: 320,
  },

  travelix: {
    top: 34,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontSize: 20,
    fontFamily: FontFamily.SFBold,
    fontWeight: "600",
    left: 13,
    position: "absolute",
  },


  profileIcon: {
    top: 22,
    left: 340,
    width: 38,
    height: 38,
    overflow: "hidden",
    position: "absolute",
  },
  component2: {
    left: 13,
  },
  
  hotel: {
    textAlign: "center",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    position: "absolute",
    left: "28%",
    top: "30%",
    fontFamily: FontFamily.SFSemibold,
  },
  
  hotelLayout: {
    lineHeight: 16,
    fontSize: FontSize.size_base,
  },

  component3: {
    left: 145,
  },
  hotel1Typo: {
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
  },
  componentLayout: {
    height: 40,
    width: 104,
    top: 231,
    position: "absolute",
  },
  component2Child: {
    height: "100%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.buttonAndIcons,
    borderStyle: "solid",
    borderColor: Color.backgroundColor,
    borderWidth: 1,
    borderRadius:7,
    position: "absolute",
    width: "100%",
  },


  component4: {
    left: 276,
  },
  exploreStayDrive: {
    top: 101,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.SFBold,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontSize: 20,
    left: 13,
    position: "absolute",
  },
  seamlessTravelExperiences: {
    top: 133,
    width: 273,
    lineHeight: 16,
    fontSize: 16,
    letterSpacing: 0.2,
    color: Color.colorWhite,
    position: "absolute",
    textAlign: "left",
    left: 13,
  },
});

export default MainScreen;
