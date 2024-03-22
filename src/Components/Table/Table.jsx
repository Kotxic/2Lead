import React, {useState} from 'react';
import cl from './Table.module.css'
const Table = ({page,sortedUsers}) => {
    const [limit, setLimit]=useState(5)
    const min = limit *(page-1)
    const max= limit * page
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {sortedUsers.map((item, index) => {
                if (index >= min && index < max) {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.phone}</td>
                        </tr>
                    );
                } else {
                    return null; // Возвращаем null, если условие не выполнено
                }
            })}
            </tbody>
        </table>
    );
};

export default Table;