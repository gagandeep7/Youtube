import React from 'react';


class SearchBar extends React.Component {

    state = { input: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        // callback to parent
        this.props.onInputSubmit(this.state.input);
    };

    render() {
        return (
                <form className="ui form" style = {{marginBottom : '1rem'}}
                //    call back onForm
                   onSubmit={this.onFormSubmit}                      >
                    <div className='field'>
                        <label htmlFor='text'>Video Search</label>
                        <input type='text'
                            value={this.state.value}
                            id='text'
                            // update searchbar value when type
                            onChange={e => this.setState({ input: e.target.value })} />
                    </div>
                </form>
        );
    }
}


export default SearchBar;













