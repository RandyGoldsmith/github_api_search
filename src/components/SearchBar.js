import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value});
    }

    render() {
        return (
            <div className="ui three column grid centered">
                <div className="column">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <input type="text" 
                                placeholder="Type Github Username"
                                value={this.state.term}
                                onChange={this.onInputChange}    
                                />
                        </div>
                    </form>
                </div>           
            </div>        
        );
    }
}

export default SearchBar;