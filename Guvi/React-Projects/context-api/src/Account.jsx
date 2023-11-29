import React from 'react'
import Greeting from './Greeting'
import Course from './Course'
import { useContext } from 'react'
import { CourseContext } from './CourseContext'

function Account() {
    const course=useContext(CourseContext);

    return (
        <div>
            <Greeting course={course} />
            <Course course={course} />
        </div>
    )
}

export default Account