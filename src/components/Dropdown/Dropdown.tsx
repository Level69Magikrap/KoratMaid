import React from "react";
interface Props {
    className: any;
  }
export const Dropdown = ({ className }: Props): JSX.Element =>{
    return(
        <div className='Dropdown'>
            <ul className="drop">
                <li>My account</li>
                <li>Logout</li>
            </ul>
        </div>
    )
}
