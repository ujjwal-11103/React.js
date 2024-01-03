import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../service/Actions/Action'
import Cart from '../Components/Cart'


    const mapStateToProps = state => ({

    })

    const mapDispatchToProps = dispatch => ({
        addToCartHandler: data => dispatch(addToCart(data))
    })
    
    
    export default connect(mapDispatchToProps, mapStateToProps)(Cart)


// function CartContainer() {

//     const mapStateToProps = state => ({

//     })

//     const mapDispatchToProps = dispatch => ({
//         addToCartHandler: data => dispatch(addToCart(data))
//     })
//     return (
//         <div>
//             <Cart />
//         </div>
//     )
// }
