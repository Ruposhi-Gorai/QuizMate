import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import app from '../firebase-config';

export default function ViewQuiz() {

  const [quizData, setQuizData] = useState([])

  useEffect(() =>{
    const db = getDatabase(app);
    const getQuizData = ref(db ,'quizzes/');
    onValue(ref(db, 'quizzes/'), (snapshot) => {
      const data = snapshot.val();

      var quizQues = [];
      for(let index in data ){

        console.log(data[index]);
        quizQues.push(data[index])
      }

      setQuizData(quizQues);
    })


  },[])

  return (

    <>
        <div className='contaniner-fluid py-5'>
                <div className='container'>
                    <div className='row text-center mb-3'>
                        <h1>View Quiz</h1>
                    </div>


                    <div className='row'>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Question</th>
                                    <th scope="col">Option 1</th>
                                    <th scope="col">Option 2</th>
                                    <th scope="col">Option 3</th>
                                    <th scope="col">Option 4</th>
                                    <th scope="col">Correct Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    quizData.length > 0
                                        ?
                                        quizData.map((v, i) => {
                                            return (
                                                <tr>
                                                    <th >{i+1}</th>
                                                    <td>{ v.ques}</td>
                                                    <td>{ v.option1}</td>
                                                    <td>{ v.option2}</td>
                                                    <td>{ v.option3}</td>
                                                    <td>{ v.option4}</td>
                                                    <td>{ v.correct_option}</td>
                                                </tr>
                                            )
                                        })

                                        :

                                        <tr>
                                            <th colSpan={7}>No record Found !!</th>
                                        </tr>

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      

    </>
  )
}
