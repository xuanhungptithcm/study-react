useState
1. initial state
2. function to update state

useReducer
1. initial state
2. reducer function
3. dispatch
4. action


// 1. const INIT_STATE = 0;
// 2.
//   const reducerCount = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return state + action.payload;
//     case "DECREASE":
//       return state - action.payload;
//     case "Nhan":
//       return state * 2;
//     case "Chia":
//       return state / 2;
//     case "BinhPhuong":
//       return state * state;
//     default:
//       throw new Error("Invalid Action");
//   }
// };

const [state, dispatch] = useReducer(reducerCount,INIT_STATE);
