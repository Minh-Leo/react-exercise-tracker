import React, {Component} from "react";
import axios from "axios";
import Exercise from "./Exercise";

export default class ExerciseList extends Component {
  state = {
    exercises: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then(res => res.data)
      .then(exercises => this.setState({exercises}))
      .catch(err => console.log(err));
  }

  exerciseList = () => {
    return this.state.exercises.map(exer => {
      return (
        <Exercise
          exercise={exer}
          deleteExercise={this.deleteExercise}
          key={exer._id}
        />
      );
    });
  };

  deleteExercise = id => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(exercise => exercise._id !== id)
    });
  };

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className='table'>
          <thead className='thead-ight'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
        {/* {exercises.map(exer => (
          <div key={exer._id}>
            <h2>
              {exer.username} : {exer.description}
            </h2>
            <button onClick={() => this.deleteExercise(exer._id)}>
              delete
            </button>
          </div>
        ))} */}
      </div>
    );
  }
}
