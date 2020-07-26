import React from 'react'
import { connect } from "react-redux"
import { buyCake } from "../Redux"

const NewCakeContainer = (props) => {
    const [number, setNumber] = React.useState(1);
    return (
        <div>
           <h2>Number of cakes: {props.numOfCakes}</h2>
           <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
           <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('Own Props', ownProps);
    return {
        numOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
