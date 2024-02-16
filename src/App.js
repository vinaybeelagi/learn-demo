import React, { useState } from 'react';
import './App.css';
import Results from './components/Results';

function App() {
  const [students, setStudents] = useState([
    { name: "Sanjay", grade: 8, id: 1, result: "" },
    { name: "Vinay", grade: 9, id: 2, result: "" },
    { name: "Ganesh", grade: 10, id: 3, result: "" },
    { name: "SanjayD", grade: 8, id: 4, result: "" },
    { name: "VinayD", grade: 9, id: 5, result: "" },
    { name: "GaneshB", grade: 10, id: 6, result: "" }
  ]);

  const [selectedGrade, setSelectedGrade] = useState(null);

  const handleButtonClick = (grade) => {
    setSelectedGrade(grade);
  }

  const handlePassFail = (id, result) => {
    const updatedStudents = students.map(student => {
      if (student.id === id) {
        return { ...student, result };
      }
      return student;
    });
    setStudents(updatedStudents);
  }

  return (
    <div className="App">
      <header className="header">
        Header
      </header>
      <main className="main">
        <nav className="nav">Nav</nav>
        <div className='content'>
          <div>
            <button onClick={() => handleButtonClick(null)}>All</button>
            <button onClick={() => handleButtonClick(8)}>8th</button>
            <button onClick={() => handleButtonClick(9)}>9th</button>
            <button onClick={() => handleButtonClick(10)}>10th</button>
          </div>

          <div>Results</div>
          <Results
            schoolName="St.Joseph"
            EstablishedDate="1995"
            studentInfo={students}
            selectedGrade={selectedGrade}
            onPassFail={handlePassFail}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
