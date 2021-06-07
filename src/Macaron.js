import React from 'react';
import PropTypes from 'prop-types';


//함수형 컴포넌트
function Macaron({propsId,propsName,propsImage}){//구조분해할당
    return (
        <>
            <h1>I Love macaron!!</h1>
            <ul>
                <li>cake No. {propsId}</li>
                <li>cake Name : {propsName}</li>
                <li>cake Image : <img src={propsImage} alt={propsName} /></li>
            </ul>
        </>
    );
}

// function Macaron(props){//구조분해할당
//     const {propsId,propsName,propsImage} = props;   
//     return (
//         <>
//             <h1>I Love macaron!!</h1>
//             <ul>
//                 <li>cake No. {propsId}</li>
//                 <li>cake Name : {propsName}</li>
//                 <li>cake Image : <img src={propsImage} alt={propsName} /></li>
//             </ul>
//         </>
//     );
// }


// function Macaron(props){
//     return (
//         <>
//             <h1>I Love macaron!!</h1>
//             <ul>
//                 <li>cake No. {props.propsId}</li>
//                 <li>cake Name : {props.propsName}</li>
//                 <li>cake Image : <img src={props.propsImage} alt={propsName} /></li>
//             </ul>
//         </>
//     );
// }

//npm install prop-types
//props자료형 검사
Macaron.propTypes = {
    propsid: PropTypes.number.isRequired,
    propsname: PropTypes.string.isRequired,
    propsimage:PropTypes.string
}



//클래스형 컴포넌트
// class Macaron extends React.Component{
//     render(){
//         return (
//             <h1>I Love macaron!!</h1>
//         );
//     }
// }

export default Macaron;