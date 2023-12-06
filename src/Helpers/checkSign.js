import {useState} from "react";

export const checkSign = (b) => {
  if(b === 'x' || b === '/' || b === '-' || b === '+' || b === '=' || b === '.'){
    return {
      isSign: true,
      sign: b
    }
  }else {
    return {
      isSign: false,
      sign: ''
    }
  }

}