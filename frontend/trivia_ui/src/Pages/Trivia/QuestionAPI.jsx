// A few functions to fetch questions from backend
import axios from "axios";

let host = "http://localhost";
let port = "4000";

// Random function
export const randGenerator = length => {
  return Math.floor(Math.random() * Math.floor(length));
};

// API Requests
// get request to /question/:key
export const getPosts = async ranNum => {
  const response = await axios.get(`${host}:${port}/posts/question/:${ranNum}`);
  try {
    const questionInfo = response.data;
    this.setState({
      question: questionInfo.question,
      buttons: questionInfo.choices,
      answer: questionInfo.answer,
      key: questionInfo.key,
      isLoading: false
    });
  } catch (error) {
    this.setState({ error, isLoading: false });
  }
};
