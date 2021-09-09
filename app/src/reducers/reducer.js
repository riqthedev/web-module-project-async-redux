import axios from "axios"
import React, {useEffect, useReducer} from "react"


const initialState = null

// axios.get("https://randomuser.me/api/")
// .then(res => {
//   console.log(res.data.results)
 
// console.log(initialState)
// }).catch(err => {
//   console.log(err)
// })





export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case "INITIALIZE": 
    
       return state = action.payload
       
     
    default:
        return state
    }
}
 
