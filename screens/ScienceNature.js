import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import Question from "../components/Question";
import { CircleFade } from "react-native-animated-spinkit";
import { H2 } from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import utf8 from "utf8";
import base64 from "base-64";

const ScienceNature = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Science & Nature Quiz",
    });
  }, [navigation]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=base64"
        )
        .then((data) => {
          setQuestions(data.data.results);
          setCurrentIndex(0);
        })
        .catch((error) => alert(error.message));
    }

    fetchData();
  }, []);

  const handleAnswer = (answer) => {
    setAnswered(true);

    const decodeCorrectAnswer = base64.decode(
      questions[currentIndex].correct_answer
    );
    const decodedCorrectAnswer = utf8.decode(decodeCorrectAnswer);

    if (answer === decodedCorrectAnswer) {
      setUserScore(userScore + 1);
      setAnswered(true);
    }
  };

  const handleNavigation = () => {
    setCurrentIndex(currentIndex + 1);
    setAnswered(null);
  };

  const handleResult = () => {
    navigation.replace("Result", {
      score: userScore,
    });
  };

  if (questions.length > 0) {
    return (
      <LinearGradient
        colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.container}
      >
        <Question
          correctOption={questions[currentIndex].correct_answer}
          incorrectOptions={questions[currentIndex].incorrect_answers}
          data={questions[currentIndex]}
          currentQuestionNumber={currentIndex + 1}
          answered={answered}
          handleAnswer={handleAnswer}
          key={questions[currentIndex]}
          handleNavigation={handleNavigation}
          handleResult={handleResult}
        />
      </LinearGradient>
    );
  } else {
    return (
      <LinearGradient
        style={styles.loading}
        colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]}
        start={[0, 0]}
        end={[1, 0]}
      >
        <CircleFade size={80} color="white" />
        <View style={{ height: 10 }} />
        <H2 color="white">Loading your questions...</H2>
      </LinearGradient>
    );
  }
};

export default ScienceNature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
