import React from "react";
import { TypoPropType } from "../../../types/types";

const Heading1:React.FC<TypoPropType> = ({title}) => {
  return (
    <div className='format'>
      <h1>{title}</h1>
    </div>
  )
}

export default Heading1
