import React from 'react';

// format used for HOC only for styling/HTML code
// adds classes to children
// const withClass = props =>(
//     <div className={props.classes}>{props.children}</div>
// );

// format used for HOC that handles logic of data more than styling/HTML
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;