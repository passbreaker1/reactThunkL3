import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

const initialState = {
  list: [
    {
      id: 1,
      title: "청크",
      body: "아무거나", 
    },
  ],

};

export const __addToDo = createAsyncThunk(
  'addToDo',
  async (payload, thunkAPI) => {
   await waitTwoSeconds()
    console.log("456",payload)
    // setTimeout(() => {
    //   thunkAPI.dispatch(addTodo(payload))
    // }, 2000)
    thunkAPI.dispatch(addTodo(payload))
  }
);

export const __deleteTodo = createAsyncThunk(
  'deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds()
    thunkAPI.dispatch(deleteTodo(payload))
    
    // setTimeout(() => {
    //   thunkAPI.dispatch(deleteTodo(payload))
    // }, 2000)
  }
);


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
     
      // console.log("123", state, action)
      //state.list.push(action.payload);
      state.list = state.list.concat(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload)
    },
  },
  
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
