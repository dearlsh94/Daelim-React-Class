import React from 'react';
import '../css/ContainTodoList.css'
import Pallete  from '../components/FormPallete';
import ItemList from '../components/FormTodoItemList';
import InputItem from '../components/FormInputTodoList';

const TodoListPage = () => {
    return (
        <div className="App">
            <main className="todo-list-template">
                <div className="title">
                    ToDo-List
                </div>
                <section className="pallete-wrapper">
                    <Pallete/>
                </section>
                <section className="form-wrapper">
                    <InputItem/>
                </section>
                <section className="todos-wrapper">
                    <ItemList/>
                </section>
            </main>
        </div>
    );
};

export default TodoListPage;