import React, { createContext, useEffect, useState } from "react";
const Context = createContext();
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import app from "../firebase-config";
import { getDatabase, onValue, ref, remove, update } from "firebase/database";

export default function ContextAPI({ children }) {
  const userLogin = localStorage.getItem("user-login") ?? 0;
  const [isLoading, setIsLoading] = useState(0);
  const [isGoogleLoading, setIsGoogleLoading] = useState(0);
  const [isGoogleLogin, setIsGoogleLogin] = useState(0);

  const googleLogin = () => {
    // e.preventDefault();
     setIsGoogleLoading(1);

    const auth = getAuth(app);

     const provider = new GoogleAuthProvider();
     signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
         setIsGoogleLoading(0);
       
        setIsGoogleLogin(1)
        toast.success("Register successfully");
        localStorage.setItem("user-login", 1);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error.message);
         setIsLogin(0);
           setIsGoogleLoading(0)
        // ...
      });
  };

    const [quizData, setQuizData] = useState([])

  useEffect(() =>{
    const db = getDatabase(app);
    const getQuizData = ref(db ,'quizzes/');
    onValue(ref(db, 'quizzes/'), (snapshot) => {
      const data = snapshot.val();
    //   console.log(data);
      

      let quizQues = []
      let indexData = []
      for(let index in data){

        console.log(data[index]);
        quizQues.push(data[index])
        indexData.push(index)
      }

      setQuizData(quizQues);
    //   console.log(quizQues)
    })


  },[])


// Inside your ContextAPI component
const deleteQuiz = (quizId) => {
  const db = getDatabase(app);
  remove(ref(db, 'quizzes/' + quizId))
    .then(() => {
      // Update local state so UI reflects deletion immediately
      setQuizData(prev => prev.filter(quiz => quiz.quizId !== quizId));
      toast.success("Quiz deleted successfully");
    })
    .catch((error) => {
      toast.error("Failed to delete quiz: " + error.message);
    });
};


  const [isLogin, setIsLogin] = useState(userLogin);
  const data = {deleteQuiz, isLogin, setIsLogin, isLoading, setIsLoading, isGoogleLogin , googleLogin, isGoogleLoading, quizData, setQuizData};
  return (
    <>
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    </>
  );
}

export { Context };
