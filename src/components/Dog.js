import React, { useEffect } from 'react';
import { getDog, fetchFail } from '../actions/index.js';
import { connect } from 'react-redux';

const Dog = (props) => {
  const { dog, isFetching, error } = props;

  useEffect(() => {
    props.getDog();
  }, []);

  if (error) {
    return <h2>error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching a dog picture...</h2>;
  }

  const handleClick = () => {
    props.getDog();
  }

  return (
    <>
      <div className="content">
        <h2>A Dog</h2>
        <button onClick={handleClick}>Get new picture</button>
        <img src={dog} alt=""></img>
        {/* {console.log("a dog:", dog)} */}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    dog: state.dog,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getDog, fetchFail })(Dog);