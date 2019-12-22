import React, {Component} from 'react';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io';
import {FaPoo, FaPoop } from 'react-icons/fa';


class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {rating: this.props.rating, pinto: this.props.pinto, numOfReviews: this.props.numOfReviews};
    }
    
    handleClick(ratingValue){
        this.setState({rating: ratingValue});
    }
    
    jogaMerda(ratingValue){
        this.setState({pinto: ratingValue});
    }
    
    
    render() {
        return(
            <div style={styles.starStyle}>
        {this.state.rating >= 1 ? ( <IoIosStar onClick={this.handleClick.bind(this,1) } /> ) :( <IoIosStarOutline onClick={this.handleClick.bind(this,1) } /> )}
        {this.state.rating >= 2 ? ( <IoIosStar onClick={this.handleClick.bind(this,2) } /> ) :( <IoIosStarOutline onClick={this.handleClick.bind(this,2) } /> )}
        {this.state.rating >= 3 ? ( <IoIosStar onClick={this.handleClick.bind(this,3) } /> ) :( <IoIosStarOutline onClick={this.handleClick.bind(this,3) } /> )}
        {this.state.rating >= 4 ? ( <IoIosStar onClick={this.handleClick.bind(this,4) } /> ) :( <IoIosStarOutline onClick={this.handleClick.bind(this,4) } /> )}
        {this.state.rating >= 5 ? ( <IoIosStar onClick={this.handleClick.bind(this,5) } /> ) :( <IoIosStarOutline onClick={this.handleClick.bind(this,5) } /> )}
            

{this.state.numOfReviews}
            </div>
        );
    }
}

export default Rating;

const styles={
    starStyle: {
        color: 'orange'
    }
}