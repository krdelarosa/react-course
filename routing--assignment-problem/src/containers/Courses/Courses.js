import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (course) =>{
        this.props.history.push({
            pathname: this.props.match.url + '/' + course.id,
            hash: '#'+course.title,
        });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <article 
                                    className="Course" 
                                    key={course.id}
                                    title={course.title}
                                    onClick={() => this.courseSelectedHandler(course)}
                                >{course.title}</article>
                            )
                        })
                    }
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={Course}/>
            </div>
        );
    }
}

export default Courses;