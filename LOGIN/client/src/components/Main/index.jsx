import styles from "./styles.module.css";
import React, {useState} from "react";


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};


	const [fileSelected, setFileSelected] = useState(null);
	const [busqueda, setBusqueda]= useState("");

	

	function comprimirArchivo(){
		//lo que haga
	};
	function descargarArchivo(){
		//lo que haga
	};
	function BuscarArchivo(){

	};

	const onFileChange = (event) => {
			event.preventDefault()
			const reader = new FileReader()
			reader.onload = async (event) => { 
			  const text = (event.target.result)
			  console.log(text)
			  alert(text)
			};
			reader.readAsText(event.target.files[0])
		  
	  };

	return (
		<div>
			<div className={styles.main_container}>
				<nav className={styles.navbar}>
					<h1></h1>
					<button className={styles.orange_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
			</div>	

			<div className="buttons-container">
				<input
					className="form-control inputBuscar"
					value={busqueda}
					placeholder="Buscar archivo">
				</input>
				<button className={styles.funtionalities_btn} onClick={BuscarArchivo}>
					Buscar
				</button>
				<input color="yellow" type="file" onChange={onFileChange} />
				<div className='compress-button-container'>
					<button className={styles.funtionalities_btn} onClick={comprimirArchivo}>
						Comprimir archivo
					</button>
				</div>
				<div className='download-button-container'>
					<button className={styles.funtionalities_btn} onClick={descargarArchivo}>
						Descargar archivo
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
