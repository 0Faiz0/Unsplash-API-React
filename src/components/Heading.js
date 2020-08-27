import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Header = styled.header`
  max-width: 100%;
`;



export const Heading = () => {

  return (
    <Header>
        <div className="navbar"> 
          <div className="logo">
            <Link to='/Home' style={{ textDecoration: 'none' }}>
              <h1><span>Quick</span>Image</h1>
            </Link>
          </div>
          <div className="links">
            <Link to='/SearchApp' style={{ textDecoration: 'none' }}>
              <h3>Search</h3>
            </Link>
            <Link to='/About' style={{ textDecoration: 'none' }}>
              <h3>About</h3>
            </Link>
            
          </div>
        </div>
    </Header>
  )
}