import React from 'react'
import state from '../store';
import { getContrastingColor } from '../config/helpers';
import { useSnapshot } from 'valtio';
const CustomButton = ({type,title,handleClick,customStyle}) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if (type === 'filled'){
            return {
                backgroundColor: snap.ccolor,
                color: getContrastingColor(snap.ccolor),
            }
        }else if (type === 'outline'){
          return {
            borderWidth:'1px',
            borderColor: snap.ccolor,
            color: snap.ccolor
          }
        }
    }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`} style={generateStyle(type)} onClick={handleClick}>{title}</button>
  )
}

export default CustomButton