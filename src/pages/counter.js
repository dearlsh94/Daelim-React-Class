import React from 'react';
import Counter from "../components/Counter";

const CounterPage = () => {
    return (
        <div className="App">
            <li><a href="/">Home</a></li>
            <main className="template">
                <div className="title">
                    Counter
                </div>
                <section>
                    <Counter/>
                </section>
            </main>
        </div>
    );
};

export default CounterPage;