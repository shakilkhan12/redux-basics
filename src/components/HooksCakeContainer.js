import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {buyCake} from "../Redux"

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numberOfCakes);
    const cakeDispatch = useDispatch();
    return (
        <div>
            <h2>Num of cakes: {numOfCakes}</h2>
            <button onClick={() => cakeDispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
