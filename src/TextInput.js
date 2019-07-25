    import React, { Component } from 'react';


    class TextInput extends Component {
      constructor(props){
        super(props);
        this.state = { info: "", showName: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(evt) {
        evt.preventDefault();
        this.setState({ info: evt.target.value })
      }

      handleSubmit(evt){
        evt.preventDefault();
        this.setState({
          submittedInfo: this.state.info,
          info:''
        })
      }

      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.info}
                onChange={this.handleChange}/>

              <button>Submit</button>
            </form>
            {this.state.submittedInfo}
          </div>
        );
      }

    }

    export default TextInput;
