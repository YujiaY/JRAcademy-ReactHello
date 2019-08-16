import React from 'react'

const Welcome = (props) => {
    return (
      <div>
        {
          props.isTeacher &&
          <strong>{`Hello, ${props.name}, I am a Teacher.`}</strong>
        }
        {
          !props.isTeacher &&
          <p>{`Hello ${props.name}, I am a student.`}</p>
        }
      </div>
    );
}

export default Welcome;
