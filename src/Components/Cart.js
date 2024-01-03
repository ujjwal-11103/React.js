import React from 'react'

export default function Cart() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Action</h1>
            <div className='main'>

                <div className="addCart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEn20oE6k5Q8Cv4KuF4FZtVYIFBpQCk2fjQ&usqp=CAU" alt="add to cart" />
                </div>

                <div className="container">

                    <div className="phone-img">
                        <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" alt="Iphone img" />
                    </div>

                    <div className="text">
                        <h1>iPhone 14 pro max</h1>
                        <h1>Price: $100.34</h1>
                    </div>

                    <div className="btn">
                        <button>Add to Cart</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
