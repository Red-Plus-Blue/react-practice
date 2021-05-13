import React from 'react';
import Stack from './logic/MaxStack';

const Row = (number, index) => (
    <tr key={index}>
        <td>{number.toString()}</td>
    </tr>
);

class MaxStackComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            max: "",
            stack: new Stack(),
            values: []
        };
    }

    refreshValues() {
        let values = [];
        for(let current = this.state.stack.top(); current; current = current.next) {
            values.push(current.value);
        }
        this.setState({
            values: values,
            max: this.state.stack.max()
        });
    }

    onClickPush() {
        this.state.stack.push(new Number(this.state.value));
        this.refreshValues();
    }
    
    onClickPop() {
        this.setState({
            value: this.state.stack.pop().toString()
        });
        this.refreshValues();
    }

    render() {
        return (<div className="container">
            <div style={{ width: "50%", margin: "auto" }}>
                <form>
                    <div className="form-group row">
                        <label htmlFor="nodeValue" className="col-sm-2 col-form-label">Value:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nodeValue" placeholder="42" onChange={event => this.setState({value: event.target.value}) }></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="max" className="col-sm-2 col-form-label">Max:</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" value={this.state.max} id="max"></input>
                        </div>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={() => this.onClickPush()}>Push</button>
                <button className="btn btn-primary mx-3" onClick={() => this.onClickPop()}>Pop</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.values.map(Row)}
                    </tbody>
                </table>
            </div>

        </div >);
    }
}

export default MaxStackComponent;