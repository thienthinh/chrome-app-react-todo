import React from 'react'
import Footer from '../filterLink/Footer'
import AddTodo from '../addTodo/AddTodo'
import VisibleTodoList from '../visibleTodoList/VisibleTodoList'
import UndoRedo from '../undoRedo/UndoRedo'

const App = () => (
	<div className="todoapp">
		<AddTodo />
		<VisibleTodoList />
		<UndoRedo />
		<Footer />
	</div>
)

export default App
