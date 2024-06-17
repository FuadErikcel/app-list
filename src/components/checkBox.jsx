import React, { Fragment, useState } from "react"

import { Checkbox } from 'primereact/checkbox';
        

export const CheckBox1 = props => {
    const {
        onChange,
        data: { id, value, done }
    } = props;

      return (
        <Fragment>
          <label className="todo new-item">
             <input
              className="todo__state"
              name={id}
              type="checkbox"
              defaultChecked={done}
              onChange={onChange}
              /> 
    
            <div className="todo__text">{value}</div>
          </label>

        </Fragment>
    );
}
