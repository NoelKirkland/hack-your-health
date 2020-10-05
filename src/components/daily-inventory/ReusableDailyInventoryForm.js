
import React from 'react';
import PropTypes from 'prop-types';

function ReusableDailyInventoryForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type='text'
        name='q1'
        placeholder='question one' /><br />
        <input
        type='text'
        name='q2'
        placeholder='question two' /><br />
        <input
        type='text'
        name='q3'
        placeholder='question three' /><br />
        <input
        type='text'
        name='q4'
        placeholder='question four' /><br />
        <input
        type='text'
        name='q5'
        placeholder='question five' /><br />
        <input
        type='text'
        name='q6'
        placeholder='question six' /><br />
        <input
        type='text'
        name='q7'
        placeholder='question seven' /><br />
        <input
        type='text'
        name='q8'
        placeholder='question eight' /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}
ReusableDailyInventoryForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableDailyInventoryForm;