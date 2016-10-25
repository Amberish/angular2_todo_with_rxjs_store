import { ActionReducer, Action } from '@ngrx/store';
import { Todo } from './contracts/todo.model';

export const ADD_TODO = 'ADD_TODO';

//export const DECREMENT = 'DECREMENT';
//export const RESET = 'RESET';

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SHOW_ALL = 'SHOW_ALL';

const TODO_INITIAL_STATE = {
    id: null,
    text: '',
    completed: false
}

const FILTER_INITIAL_STATE = SHOW_ALL;

export const todo: ActionReducer<Todo> = (state: Todo = TODO_INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, action.payload);

        // case DECREMENT:
        //     return state - 1;

        // case RESET:
        //     return 0;

        default:
            return state;
    }
}

export const todos: ActionReducer<Array<Object>> = (state: Array<Object> = [], action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];

        // case DECREMENT:
        //     return state - 1;

        // case RESET:
        //     return 0;

        default:
            return state;
    }
}

export const filter: ActionReducer<string> = (state: string = FILTER_INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload;

        default:
            return state;
    }
}