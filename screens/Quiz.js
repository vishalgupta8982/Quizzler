import { React, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const shuffleArray=(Array)=>{
  for(let i=Array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [Array[i],Array[j]]=[Array[j],Array[i]];
  }
}


const Quiz = (navigation) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] =  useState(0);
  const [options, setOptions]=useState([])
  const [score,setScore]= useState(0)
  const getQuiz = async () => {
    const url = "https://opentdb.com/api.php?amount=20&category=21&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    setOptions(generateOptionAndShuffle(data.results[0]))
  };

  useEffect(() => {
    getQuiz();
  }, []);
  const handleNextPress = () => {
    setQues(ques+1);
     setOptions(generateOptionAndShuffle(question[ques+1]))
  };

  const generateOptionAndShuffle =(_question)=>{
    const options=[..._question.incorrect_answers];
    options.push(_question.correct_answer)
    
    shuffleArray(options)
return options
  }
  const handleSelectOption=(_options)=>{
    if(_options===question[ques].correct_answer){
     setScore(score+1) 
    }
    if(ques!=19){
      setQues(ques+1);
     setOptions(generateOptionAndShuffle(question[ques+1]))
    }
    if(ques===19){
      handleShowResult()
    }
 
  }
  const handleShowResult=()=>{
    navigation.navigation.navigate('Result',{
      score:score
    })
  }
  return (
    <View style={styles.container}>
      {question && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
           Q.{decodeURIComponent(question[ques].question)}
            </Text>
          </View>
          <View style={styles.option}>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[0])}>
              <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[1])}>
              <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[2])}>
              <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(options[3])}>
              <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity> */}
            {ques!=19 &&
            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>}
            {ques===19 &&
            <TouchableOpacity style={styles.button} onPress={handleShowResult}>
              <Text style={styles.buttonText}>Show Result</Text>
            </TouchableOpacity>}
            {/* <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigation.navigate("Result")}}>
                    <Text>End</Text>
                </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>
  );
};
export default Quiz;
const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  option: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
     width: "100%",
    backgroundColor: "#15F385",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  question: {
    fontSize: 20,
  },
  option: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#50B1B7",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});



 