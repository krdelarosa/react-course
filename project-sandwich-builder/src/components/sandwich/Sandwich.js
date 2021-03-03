import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Sandwich.css';
import Ingredient from './ingredients/Ingredients';

const sandwich = (props) => {
    console.log(props);

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <Ingredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((array, el) => {
       return array.concat(el); 
    },[]);
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients.</p>
    }

    return (
        <div className={classes.Sandwich}>
            <Ingredient type='bread-top'/>
            {transformedIngredients}
            <Ingredient type='bread-bottom'/>
        </div>
    );
};

export default withRouter(sandwich);