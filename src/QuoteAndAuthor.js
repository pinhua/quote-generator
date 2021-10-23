import React from 'react';
import base from './base';
//import quotes from './QuoteDatabase';
class QuoteAndAuthor extends React.Component{
    state = {
        quotes: {}
    }
    componentDidMount(){
        this.ref = base.syncState('quotes', {
            context: this,
            state: 'quotes'
        });
    }
    render(){
        
        const min = 0;
        const max = this.state.quotes.length;
        return(
            <div>
                {this.state.quotes[Math.floor(Math.random()*(max-min)+min)].quote}<br />
                {this.state.quotes[Math.floor(Math.random()*(max-min)+min)].author}   
            </div>
            
        )

    }
}
export default QuoteAndAuthor