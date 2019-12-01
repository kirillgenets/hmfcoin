import React from 'react';
import './style/Cryptocurrency.scss';

export default function Cryptocurrency(props) {
  return (
    <tr className="cryptocurrency">
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.cap}</td>
      <td>{props.price}</td>
      <td>{props.volume}</td>
      <td>{props.supply}</td>
      <td>{props.change}</td>
    </tr>
  )
}