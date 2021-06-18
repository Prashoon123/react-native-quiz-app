import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { H1 } from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import Topic from "../components/Topic";
import { useLayoutEffect } from "react";
import { AdMobBanner } from "expo-ads-admob";
import { ADMOB_BANNER_AD_KEY } from "../keys";

const Topics = ({ navigation }) => {
  const topics = [
    { name: "General Knowledge", link: "GK", id: 1 },
    { name: "Sports", link: "Sports", id: 2 },
    { name: "Computers", link: "Computers", id: 3 },
    { name: "Video Games", link: "VideoGames", id: 4 },
    { name: "Science & Nature", link: "ScienceAndNature", id: 5 },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Topics",
      headerLeft: "",
    });
  });

  const deviceHeight = Dimensions.get("window").height;

  const marginTopTextContainer = deviceHeight > 700 ? 30 : 20;
  const marginTopTopicsContainer = deviceHeight > 700 ? 40 : 20;

  return (
    <LinearGradient
      colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.container}
    >
      <View style={{ marginTop: marginTopTextContainer }}>
        <H1 color="white">Quiz App</H1>
      </View>

      <View style={{ marginTop: marginTopTopicsContainer }}>
        {topics.map(({ name, link, id }) => (
          <Topic name={name} link={link} navigation={navigation} key={id} />
        ))}
      </View>

      <View style={styles.adContainer}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={ADMOB_BANNER_AD_KEY} // Test ID - ca-app-pub-3940256099942544/6300978111
          servePersonalizedAds={true}
        />
      </View>
    </LinearGradient>
  );
};

export default Topics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    marginTop: 30,
  },
  topicsContainer: {
    marginTop: 40,
  },
});
