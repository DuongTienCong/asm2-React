import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ThongTinBenhNhan = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000')
            setData(response.data.results)
            console.log('Data' , data)
        }
        fetchData();
    }, []);


    return (
        <div>
            <ul>
                {data.map(item => (
                    <table className='info-table'>
                        <thead>
                            <tr>
                                <th>THÔNG TIN BỆNH NHÂN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tên: {item.name}</td>
                            </tr>
                            <tr>
                                <td>Tuổi: {item.tuoi}</td>
                            </tr>
                            <tr>
                                <td>CCCD: {item.cccd}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ: {item.diachi}</td>
                            </tr>
                            <tr>
                                <td>Tuần hoàn: {item.tuanhoan}</td>
                            </tr>
                            <tr>
                                <td>Mạch: {item.mach}</td>
                            </tr>
                            <tr>
                                <td>Huyết áp : {item.huyetap} </td>
                            </tr>
                            <tr>
                                <td>Tim : {item.tim}</td>
                            </tr>
                            <tr>
                                <td>Hô hấp : {item.hohap}</td>
                            </tr>
                            <tr>
                                <td>Thần kinh : {item.thankinh}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </ul>
        </div>
    );
};

export default ThongTinBenhNhan;

