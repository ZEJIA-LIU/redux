import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
function stateChanger(state, action) {
    if (state === undefined) {
        state = 0
    } else {
        if (action.type === 'add') {
            state += action.payload
        }
        else if (action.type === 'add2') {
            state += action.payload
        }
    }
    return state
}
let store = createStore(stateChanger)
render()
function render() {
    ReactDOM.render(<App value={store.getState()} add1={() => {
        store.dispatch({ type: 'add', payload: 1 })
    }} />, document.getElementById('root'))
}
store.subscribe(() => render())

