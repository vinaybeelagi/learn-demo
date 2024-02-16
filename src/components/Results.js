import React, { useEffect } from 'react';

function Results(props) {
  const { schoolName, EstablishedDate, studentInfo, selectedGrade, onPassFail } = props;

  // useEffect(() => {
  //   props.recieved(resultDate);
  // }, []);

  const filteredStudents = selectedGrade ? studentInfo.filter(student => student.grade === selectedGrade) : studentInfo;

  return (
    <div>
      {schoolName}-{EstablishedDate}
      <div>
        {filteredStudents.map(student => (
          <div key={student.id}>
            {student.name} {student.grade} 
            <button onClick={() => onPassFail(student.id, "Pass")}>Pass</button>
            <button onClick={() => onPassFail(student.id, "Fail")}>Fail</button>
            {student.result && <span>Result: {student.result}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
