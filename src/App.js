import React, { useState } from "react"
import './App.css'
import { v4 as uuidv4 } from 'uuid';
// import ViewData from "./components/viewData/ViewData";


const data = [

  {
    uid: uuidv4(),
    employeeName: 'ali',
    employeesName: 'saad'

  },


  {
    uid: uuidv4(),
    employeeName: 'waqas',
    employeesName: 'wahab',

  },
  {
    uid: uuidv4(),
    employeeName: 'junaid',
    employeesName: 'bilal',

  },
  {
    uid: uuidv4(),
    employeeName: 'asad',
    employeesName: 'anas',

  },
  {
    uid: uuidv4(),
    employeeName: 'talha',
    employeesName: 'usama',

  },
  {
    uid: uuidv4(),
    employeeName: 'kashif',
    employeesName: 'zain',

  }

]


export default function App() {


  // const [input, setInput] = useState('') 




  const [employName, setEmployName] = useState('')
  const [employsName, setEmploysName] = useState('')


  const [students, setStudents] = useState(data)


  const [updateUid, setUpdateUid] = useState(0)

  const [isUpdate, setIsUpdate] = useState(false)

  const [task, setTask] = useState('add some task')

  const onDeleteHandler = (e) => {
    let newStudents = students.filter((students) => students.uid !== e)
    setStudents(newStudents)
  }




  const onUpdateHandler = (item) => {
    console.log(students);
    setEmployName(item.employeeName)
    setEmploysName(item.employeesName)
    // setUpdateUid(item)

  }


  const onCtaUpdate = () => {
    console.log('onCtaUpdate');

    let student = {
      name: employName,
      name2: employsName,

    }
  }


    const onSubmitHandler = () => {
      console.log('submit button clicked');
      if (!employName || !employsName) {
        alert('All inputs are required')
        return
      }

      // do some logics with the form data   
      console.log('Values', employName, employsName)

      let student = {
        uid: uuidv4(),
        employeeName: employName,
        employeesName: employsName,

      }

      setStudents([...students, student])

      setEmployName('')
      setEmploysName('')
      setIsUpdate(false)

    }


  //   let newStudents = students.map((item) => {
  //     if (item.uid === updateUid) {
  //       return student
  //     }
  //     else {
  //       return item
  //     }
  //   })

  //   setStudents(students)

  //   setEmployName('')
  //   setEmploysName('')
  //   setIsUpdate(false)




  // }


  // const viewData = () => {
  //   if (setStudents) {
  //     alert('Data is read')

  //   }

  // }







  return (

    <div>

      <div>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Employees List</h2>

        <h3 style={{ display: 'flex', justifyContent: 'center' }}>Student SignUp Form</h3>
      </div>

      {/* {isUpdate ?
        <button onClick={onCtaUpdate}>Update</button> :
        <button onClick={onSubmitHandler}>Submit</button>
      } */}
      
      <form>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>First Name: <input onChange={(e) => setEmployName(e.target.value)} value={employName} placeholder='employ first name' type='text' /> </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>Last Name: <input onChange={(e) => setEmploysName(e.target.value)} value={employsName} placeholder='employ last name' type='text' /> </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}> <button onClick={onSubmitHandler}>Submit</button></div>




      <br />
      <br />
      <br />
      <br />

      {/* /////////////////////////////////////////////////////input   button////////////////////////////////////////   */}

      <div style={{ display: 'flex', justifyContent: 'center' }}>

        {/* <input style={{ width: 820 }} onChange={e => setInput(e.target.value)} value={input} type="text" placeholder="Add a task" />  */}

        {/* <button onClick={() => onTask()} type="submit">Add a task</button> */}

      </div>

      <br />

      <table>
        <tr className="customTable">
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th>Actions</th>


          {
            students.map((item) => {
              return (
                <tr className='customTable'>
                  <td>{item.employeeName} </td>
                  <td>{item.employeesName}</td>
                  <td>{item.uid}</td>
                  <td><button onClick={() => onUpdateHandler(item)}>Update</button> <button className="deleteButton" onClick={() => onDeleteHandler(item.uid)}>Delete</button> <button>View</button></td>
                </tr>
              )
            })
          }
        </tr>




      </table>




    </div>
  )
}
