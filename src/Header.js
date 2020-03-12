import React, {useState} from 'react'
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap'

import { Link } from 'react-router-dom'

// criando o componente Header //quebrando trechos da interface em componentes
const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    return (
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/' >Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem >
              <NavLink tag={Link} to='/genre'>Gêneros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

  export default Header