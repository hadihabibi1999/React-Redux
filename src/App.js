
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";

class Counter extends React.Component {
    
      increment = () => {
        this.props.dispatch({type:'INCREMENT'})
      }
    
      decrement = () => {
        this.props.dispatch({type:'DECREMENT'})
      }
    
      render() {
        return (
             <div className='badge badge-dark'style={{marginTop:400,marginLeft:755}}>
                 <h2>counter</h2>
                 <button onClick={this.decrement}>-</button>
                     <span className="count"> {this.props.count} </span>
                 <button onClick={this.increment}>+</button>
             </div>
        );
      }
    }
  
    const mapStateToProps = (state) => ({
      count:state.count
    })
    
    
    export default connect(mapStateToProps)(Counter);
