import styles from "./styles.module.css";
import React, {useState} from "react";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};



	const [busqueda, setBusqueda]= useState("");

	function comprimirArchivo(){
		//lo que haga
	};
	function descargarArchivo(){
		//lo que haga
	};
	function BuscarArchivo(){

	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<div className="containerInput">
				<input
					className="form-control inputBuscar"
					value={busqueda}
					placeholder="Búsqueda por Nombre o Empresa"></input>


				<button  onClick={BuscarArchivo} className='btn-success'>
					Buscar
				</button>
			</div>

			<input type="file" className= "input"/>


			<div className='compress-button-container'>
				<button onClick={comprimirArchivo} className='compress-button'>
					Comprimir archivo
				</button>
			</div>
			<div className='download-button-container'>
				<button onClick={descargarArchivo} className='download-button'>
					Descargar archivo
				</button>
			</div>
		</div>
	);
};

export default Main;
