import React from "react";
import areAnagrams from './logic/Anagrams';

class AnagramsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: "",
            second: "",
            areAnagrams: true
        };
    }

    onChange(first, second) {
        this.setState({ 
            first: first,
            second: second,
            areAnagrams: areAnagrams(first, second)
        });
    }

    render() {
        let noText = this.state.first === "" && this.state.second === "";
        let alertType = ( noText ? 'alert-primary' : ( this.state.areAnagrams ? 'alert-success' : 'alert-danger' ));
        let alertText = ( noText ? ' Enter values to check if they are anagrams' : ( this.state.areAnagrams ? 'These are anagrams' : 'These are not anagrams' )); 
        let alertClasses = ['alert', alertType, 'my-2'].join(' ');
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label htmlFor="first" className="col-sm-2 col-form-label">First:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="first" onChange={event => this.onChange(event.target.value, this.state.second)}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="second" className="col-sm-2 col-form-label">Second:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="second" onChange={event => this.onChange(this.state.first, event.target.value)}></input>
                        </div>
                    </div>
                </form>
                <div className={alertClasses} role="alert">
                    {alertText}
                </div>
            </div>
        );
    }
}

export default AnagramsComponent;