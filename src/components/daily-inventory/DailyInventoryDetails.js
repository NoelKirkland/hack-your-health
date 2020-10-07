import React from "react";
import { useFirestore } from "react-redux-firebase";

function DailyInventoryDetails(props){
  const { dailyInventory } = props;
  const firestore = useFirestore();

  function addResponseToFirestore(event){
    event.preventDefault();
    props.onNewResponseCreation();

    return firestore.collection('responses').add({
      responseQ1: event.target.responseQ1.value,
      responseQ2: event.target.responseQ2.value,
      responseQ3: event.target.responseQ3.value,
      responseQ4: event.target.responseQ4.value,
      responseQ5: event.target.responseQ5.value,
      responseQ6: event.target.responseQ6.value,
      responseQ7: event.target.responseQ7.value,
      responseQ8: event.target.responseQ8.value
    });
  }

  return(
    <React.Fragment>
      <h1>{dailyInventory.name}</h1>
      <form onSubmit={addResponseToFirestore}>
        <label>
          {dailyInventory.q1}
          <select name='responseQ1'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q2}
          <select name='responseQ2'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q3}
          <select name='responseQ3'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q4}
          <select name='responseQ4'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q5}
          <select name='responseQ5'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q6}
          <select name='responseQ6'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q7}
          <select name='responseQ7'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <label>
          {dailyInventory.q8}
          <select name='responseQ8'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>
        <button type='submit'>Submit form!</button>
      </form>
    </React.Fragment>
  )
}

export default DailyInventoryDetails;