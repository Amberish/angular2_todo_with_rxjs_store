import { ActionReducer, Action } from '@ngrx/store';
import { Todo } from './contracts/todo.model';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

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

        case EDIT_TODO:
            return Object.assign({}, state, {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            });

        // case RESET:
        //     return 0;

        default:
            return state;
    }
}

export const todos: ActionReducer<Array<Todo>> = (state: Array<Todo> = [], action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];

        case EDIT_TODO:
            return state.map(item => {
                
                if(item.id == action.payload.id)
                    return todo(item, action);

                return item;
            })

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