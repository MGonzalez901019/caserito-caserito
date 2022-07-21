import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/Cartwidget'


//TODO: agregar la libreria fontAwesome
//TODO: poner el carrito a la derecha

const Navbar = () => {
    
    
    return (


        <nav className="Navbar" >
            
                <h1>
                    Caserito Caserito
                </h1> 
                <button>Catálogo</button>
                <button>Sobre Nosotros</button>
                <button>Contacto</button>
                <CartWidget></CartWidget>
                
        </nav>
     
    )
        
    
}


export default Navbar