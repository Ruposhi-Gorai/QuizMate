import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react'
import app from '../firebase-config';
import { Context } from './ContextAPI';
import { useNavigate } from 'react-router';

export default function ViewQuiz() {
  const {isLogin} = useContext(Context);

       const navigate = useNavigate();
  useEffect(()=>{
    if(isLogin == 0){
        navigate('/login')

    }
  }, [])

const {quizData, setQuizData, deleteQuiz } = useContext(Context)

// const deleteData = (index)=> {
// const updatedData = [...quizData];
// updatedData.splice(index, 1)
// setQuizData(updatedData)
// }

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
                                                    <td><button onClick={()=>deleteQuiz(v.id)}>Delete</button></td>                                                 
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
