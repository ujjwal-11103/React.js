import React from 'react'
import Table from 'react-bootstrap/Table';

export default function ListWithTable() {
    const object = [
        { name: 'Ujjwal', email: 'ujjwal@gmail.com', phone: '123' },
        { name: 'Prajwal', email: 'prajwal@gmail.com', phone: '222' },
        { name: 'Raj', email: 'raj@gmail.com', phone: '333' }
    ]

    return (
        <div>
            <h1>List with table</h1>
            <Table striped bordered hover>
                <tbody>
                    {
                        <tr>
                            <td>Sr.No.</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                        </tr>
                    }


                    {/* When you render a list of elements using map or any other iteration method, React needs a way to uniquely identify each element. The key attribute provides a unique identifier for each element in the list. React uses these keys to efficiently update the virtual DOM and determine which items have changed when the underlying data changes.*/}

                    {
                        object.map((item, i) =>
                            <tr key={i}>

                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
