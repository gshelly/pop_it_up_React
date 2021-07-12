import React, { useState } from 'react';

const Person = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [getAge, setAge] = useState(age)
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {getAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {(event) => setAge( getAge + 1) }> Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default Person;