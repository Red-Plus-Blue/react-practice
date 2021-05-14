import React from "react";
import compress from './logic/StringCompression';

class StringCompressionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uncompressed: "",
            compressed: "",
        };
    }

    onChange(uncompressed) {
        this.setState({
            uncompressed: uncompressed,
            compressed: compress(uncompressed)
        });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label htmlFor="string" className="col-sm-2 col-form-label">String:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="string" onChange={event => this.onChange(event.target.value)}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="compressed" className="col-sm-2 col-form-label">Compressed:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" id="compressed" readOnly value={this.state.compressed}></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default StringCompressionComponent;