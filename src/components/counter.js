import React, {Component, PropTypes} from 'react';
require('normalize.css/normalize.css');
require('styles/App.css');
let yeomanImage = require('../images/yeoman.png');

class Counter extends Component {
    render() {
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
        return (
            <div className="index">
                <img src={yeomanImage} alt="Yeoman Generator" />
                <div className="notice">
                    <div>
                        {counter}
                        {' '}
                        <button onClick={increment}>加</button>
                        {' '}
                        <button onClick={decrement}>减</button>
                        {' '}
                        <button onClick={incrementIfOdd}>如果是奇数就加</button>
                        {' '}
                        <button onClick={() => incrementAsync() }>异步加</button>
                    </div></div>

            </div>

        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}
export default Counter;