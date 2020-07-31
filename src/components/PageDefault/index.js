import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';



function PageDefault({children}){
    return (
        <div>
            <Menu/>
            {children}
            <Footer/> 
        </div>
    );
}

export default PageDefault;