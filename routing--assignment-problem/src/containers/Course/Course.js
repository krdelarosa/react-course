import React, { Component } from 'react';

class Course extends Component {
    state = {
        viewedCourse: null
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate () {
        console.log(this.props);
        this.loadData();
    }

    loadData () {
        if(this.props.match.params.id){
            if(!this.state.viewedCourse || (this.state.viewedCourse && this.state.viewedCourse.id != this.props.match.params.id)){
                this.setState({ viewedCourse: {
                    id: this.props.match.params.id,
                    title: this.props.location.hash,
                }});
            }
        }
        
    }

    render () {
        console.log(this.state.viewedCourse);
        
        let course = <p>Select a course!</p>;
        if(this.state.viewedCourse){
            course = (
                <div>
                    <h1>{this.state.viewedCourse.title}</h1>
                    <p>You selected the Course with ID: {this.state.viewedCourse.id}</p>
                </div>
            );
        }
        return course;
    }
}

export default Course;