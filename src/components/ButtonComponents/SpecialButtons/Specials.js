import React, { useState } from 'react';

//import any components needed
import Specialbutton from './SpecialButton';
//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialDatas, setSpecialDatas] = useState(specials);
  return (
    <div>
      {specialDatas.map((specialBtn, i) => {
        return <Specialbutton specialBtn={specialBtn} key={i} />;
      })}
    </div>
  );
};

export default Specials;
