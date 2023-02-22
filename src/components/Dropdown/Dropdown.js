import React, {useState} from 'react'
import './Dropdown.css'
import DropdownArrowUp from '../../img/DropdownArrowUp.svg'
import DropdownArrowDown from '../../img/DropdownArrowDown.svg'

const Dropdown = ({title, content, opened}) => {
    const [isOpen, setIsOpen] = useState(opened)
    return (
        <div className="dropdown">
            <div className="dropdown__head" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img className="dropdown__arrow" src={isOpen ? DropdownArrowUp : DropdownArrowDown}
                     alt="dropdown arrow"/>
            </div>
            <div className={`dropdown__body ${isOpen ? 'open' : 'close'}`}>
                {
                    typeof content === 'string'
                        ? content
                        : content.map(item => <span className="dropdown__body-item" key={item}>{item}</span>)
                }
            </div>
        </div>
    )
}

export default Dropdown
