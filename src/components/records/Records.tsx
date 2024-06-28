import React from 'react'
import './records.css'
import formatDate from '../../module/formatDate'
import { IForm } from '../../module/iForm'


export const Records = (props:{item: IForm}) => {
  const { date, way } = props.item
  return (
    <>
      <h4 className='inf'>{formatDate(date)}</h4>
      <h4 className='inf'>{way}</h4>
    </>
  )
}
