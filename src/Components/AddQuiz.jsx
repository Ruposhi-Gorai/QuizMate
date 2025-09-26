import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import app from '../firebase-config';



export default function 


() {
  const formHandler = (e)=>{
  e.preventDefault();
  const db = getDatabase(app);

  const data = {
    ques: e.target.question.value,
    option1: e.target.option1.value,
    option2: e.target.option2.value,
    option3: e.target.option3.value,
    option4: e.target.option4.value,
    correct_option: e.target.correct_option.value,

  }  
  set(ref(db, 'quizzes/' + Date.now()),data);
}


  return (
    <>
 <div className='container my-5'>
       <h1 className='p-3'>Add Quiz</h1> 
       
  <form className='gap-3 row' onSubmit={formHandler}>
  <div className="form-group">
    <label for="question">Add Question</label>
    <input type="text" className="form-control" id="question" name='"question"' placeholder="Write a question"/>
  </div>
  <div className="form-group">
    <label for="option1">Option 1</label>
    <input type="text" className="form-control" id="option1 " name='option1' placeholder="option 1"/>
  </div>
    <div className="form-group">
    <label for="option2">Option 2</label>
    <input type="text" className="form-control" id="option2 " name='option2' placeholder="option 2"/>
  </div>
    <div className="form-group">
    <label for="option3">Option 3</label>
    <input type="text" className="form-control" id="option3" name='option3' placeholder="option 3"/>
  </div>
    <div className="form-group">
    <label for="option4">Option 4</label>
    <input type="text" className="form-control" id="option4 " name='option4' placeholder="option 4"/>
  </div>
    <div className="form-group">
    <label for="correct_option">Correct Option</label>
    <select name="correct_option" id="">
      <option value="option-1">option 1 </option>
      <option value="option-2">option 2 </option>
      <option value="option-3">option 3 </option>
      <option value="option-4">option 4 </option>
    </select>

  </div>

  <div>
  <button type="submit" className="btn btn-primary mx-auto">Submit</button>
  </div>
</form>

       </div>
    </>
  )
}
