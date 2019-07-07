import React from 'react';
import '../css/Template.css'
import Pallete  from '../components/Pallete';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

const TodoListPage = () => {
    return (
        <div className="App">
            <main className="template">
                <div className="title">
                    ToDo-List
                </div>
                <section className="pallete-wrapper">
                    <Pallete/>
                </section>
                <section className="form-wrapper">
                    <TodoInput/>
                </section>
                <section className="todos-wrapper">
                    <TodoList/>
                </section>
            </main>
        </div>
    );
};

export default TodoListPage;