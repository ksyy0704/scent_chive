import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
  
export default function StarRating() {
  
  const [ratingValue, setRatingValue] = React.useState(0);
  
  return (
    <div style={{ display: 'block', padding: 30 }}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
            평점 입력
        </Typography>
        <Rating
          name="Rating Label"
          value={ratingValue}
          size="large"
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}







// import React from 'react';
// import ReactDOM from 'react-dom';
// import StarRatingComponent from 'react-star-rating-component';
 
// class Rating extends React.Component {
//   constructor() {
//     super();
 
//     this.state = {
//       rating: 1
//     };
//   }
 
//   onStarClick(nextValue, prevValue, name) {
//     this.setState({rating: nextValue});
//   }
 
//   render() {
//     const { rating } = this.state;
    
//     return (                
//       <div>
//         <h2>Rating from state: {rating}</h2>
//         <StarRatingComponent 
//           name="rate1" 
//           starCount={10}
//           value={rating}
//           onStarClick={this.onStarClick.bind(this)}
//         />
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <Rating/>, 
//   document.getElementById('rating')
// );

// export default Rating



