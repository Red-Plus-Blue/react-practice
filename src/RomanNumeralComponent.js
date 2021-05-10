import React from "react";
import RomanNumerals from './logic/RomanNumerals';

class RomanNumeralComponent extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            numerals:  "",
            decimal: 42
        };
    }

    convert() {
        if(!this.state.decimal) {
            this.setState({ numerals: "" });
            return; 
        }
        let numerals = RomanNumerals(this.state.decimal);
        this.setState({ numerals: numerals });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label htmlFor="decimal" className="col-sm-2 col-form-label">Decimal:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="decimal" placeholder="42" onChange={event => this.setState({ decimal: event.target.value })}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="roman-numerals" className="col-sm-2 col-form-label">Roman Numerals:</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="roman-numerals" value={this.state.numerals}></input>
                        </div>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={() => this.convert()}>Convert</button>
            </div>
        );
    }
}

export default RomanNumeralComponent;