import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { reducer } from "../reducers/reducer";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function Person(props) {
  const [state, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      dispatch({
        type: "INITIALIZE",
        payload: res.data.results,
      });
    });
  }, []);

  const people = state;

  {
    people &&
      people.map((person) => {
        console.log(person);
      });
  }

  return (
    // return( <><h1>{person.name.first}  {person.name.last}</h1> <h2>{person.email}</h2> <h3>{person.gender}</h3> <h4>{person.cell}</h4></>);
    <div>
      {people &&
        people.map((person) => {
           return( <Card   bg={'info'} border={'secondary'} style={{ width: '18rem',  height:"10rem"}} >
          <Card.Body>
          <Card.Title> {person.name.first} {person.name.last}</Card.Title>
            <Card.Link>
             {person.email}
            </Card.Link>
            <Card.Text>
                {person.cell}
            </Card.Text>
          </Card.Body>
          </Card>)
        })}
    </div>
    
  );
}


export default Person;
