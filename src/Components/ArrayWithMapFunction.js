import React from 'react'

export default function ArrayWithMapFunction() {
    // const students = ['raj', 'ujjwal', 'prajwal']

    const object = [
        { name: 'Ujjwal', email: 'ujjwal@gmail.com', phone: '123' },
        { name: 'Prajwal', email: 'prajwal@gmail.com', phone: '132' },
        { name: 'Raj', email: 'raj@gmail.com', phone: '546' }
    ]

    // students.map((item) => {
    //     console.log("Name = " + item);
    // })

    // for (let i = 0; i < students.length; i++) {
    //     console.log("Using for loop =" + students[i])
    // }

    return (
        <div>
            <h1>Handling Array with list</h1>
            {/* {
                students.map((data) =>
                    <h1>{data}</h1>

                )
            } */}

            {/* for loop cannot be used inside return method */}
            {/* {
                for (let i = 0; i < students.length; i++) {
                    const element = students[i];
                    
                }
            } */}
            <table border={1}>

                {
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                }

                {
                    object.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>


                        </tr>
                    )
                }
            </table>

        </div>
    )
}
