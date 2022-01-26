import React from "react"
import "../css/meseros.css"
 
const Waiters = () => {
    return (
        <main className="waiters">
            <div>
            <h1>PEDIDOS</h1>
            <button className="home-icon" ><i class="fas fa-home"></i></button>
            <button className="menu">Comandas listas</button>
            </div>
            <div>
            <input className="input" type="text" placeholder="Nombre del cliente" />
            <input className="input" type="text" placeholder="Número de mesa" />
            <button className="menu">OK</button>
            </div>
            <section className="containerMenu">
                <button className="menu">Desayunos</button>
                <button className="menu">Hamburguesas</button>
                <button className="menu">Acompañamientos</button>
                <button className="menu">Para tomar</button>
            </section>
            <section>
                <div className="menu-data"></div>
                <div className="resumen">
                <button className="menu">Enviar pedidos</button>
                </div>
            </section>
        </main>
    )
}
export default Waiters;
