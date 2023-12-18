import React from 'react'
import Table from 'react-bootstrap/Table';

export default function NestedList() {
    const object = [
        {
            name: 'Ujjwal', email: 'ujjwal@gmail.com', Address: [
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
            ]
        },
        {
            name: 'Prajwal', email: 'prajwal@gmail.com', Address: [
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
            ]
        },
        {
            name: 'Raj', email: 'raj@gmail.com', Address: [
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
                { HouseNo: "112", city: 'Boisar', State: 'Maharashtra' },
            ]
        }
    ]

    return (
        <div>
            <h1>Nested List with table</h1>
            <Table bordered hover variant='dark'>
                <tbody>
                    {
                        <tr>
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    }


                    {/* When you render a list of elements using map or any other iteration method, React needs a way to uniquely identify each element. The key attribute provides a unique identifier for each element in the list. React uses these keys to efficiently update the virtual DOM and determine which items have changed when the underlying data changes.*/}

                    {
                        object.map((item, i) =>
                            <tr key={i}>

                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>

                                <td>
                                    <Table variant='dark'>
                                        <tbody>

                                            {

                                                item.Address.map((item2) =>
                                                    <tr>
                                                        <td>{item2.HouseNo}</td>
                                                        <td>{item2.city}</td>
                                                        <td>{item2.State}</td>

                                                    </tr>
                                                )
                                            }

                                        </tbody>
                                    </Table>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
