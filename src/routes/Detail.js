import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){ //Detail컴포넌트가 마운트 되면
        const { location, history } = this.props; //구조 분해 할당으로 location, history 를 얻고
        if(location.state === undefined){
            history.push('/'); //홈으로 이동 즉 리다이렉트 기능이다.홈 URL로 변경
        } 
    }


    render() {
        const {location} = this.props;
        if(location.state){
        //console.log(location);
        return (
            <div className="detail">
            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            <div className="detail_data">
                <h3 className="detail_title" style={{backgroundColor:"#eee"}}>{location.state.title}</h3>
                <h4 className="detail_year">{location.state.year}</h4>
                <ul className="detail_genres">
                    {location.state.genres.map( (genre, index) => {
                        return (
                            <li key={index} className="detail_genre">{genre}</li>    
                        )
                    })}
                    
                </ul>
                <p className="detail_summary">{location.state.summary.slice(0,180)}...</p>
            </div>
        </div>
        )
    }else{
        return null; 
    }  
    }
}


export default Detail;
