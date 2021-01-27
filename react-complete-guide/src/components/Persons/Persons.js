import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

// const persons = (props) => {
class Persons extends PureComponent{
        componentWillReceiveProps(props){
                console.log('Persons componentWillReceiveProps',props);
        }
        // shouldComponentUpdate is not needed when extending PureComponent
        // shouldComponentUpdate(nextProps, nextState){ // to check if the current component should be updated
        //         console.log('Persons shouldComponentUpdate');
        //         if(
        //                 nextProps != this.props.persons ||
        //                 nextProps != this.props.changed ||
        //                 nextProps != this.props.clicked
        //         ){
        //                 return true;
        //         }else{
        //                 return false;
        //         }
        // }

        getSnapshoptBeforeUpdate(prevProp, prevState){
                console.log('Persons getSnapshoptBeforeUpdate');
        }

        componentDidUpdate(){
                console.log('Persons componentDidUpdate');
        }

        componentWillUnmount(){
                console.log('Persons componentWillUnmount');
        }

        render(){
                console.log('Persons rendering');
                return this.props.persons.map((person, index) =>{
                        return( 
                        <Person 
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}
                        click={() => this.props.clicked(index)}
                        isAuth={this.props.authenticated}
                        />
                        );
                });
        };
};

export default Persons;