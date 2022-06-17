import styles from "./styles.module.css";
import React, {useState} from "react";
import axios from "axios";


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [data, setData] = useState({
		path: "",
		fileData: "",
		email: "a@a.com",
		compression: "lz78"
	});

	const [busqueda, setBusqueda]= useState("");
	const [error, setError] = useState("");
	// const filepicker = document.getElementById('fileSelect');

	function comprimirArchivo(){
		//escoge el tipo de compresion
	};
	function descargarArchivo(){
		//lo que haga
	};
	function BuscarArchivo(){

	};

	const onFileChange = async (event) => {
		event.preventDefault()
		const reader = new FileReader()
		reader.onload = async (eventReadFile) => {
			const text = (eventReadFile.target.result);
			setData({ ...data, path: "README.md"});
			setData({ ...data, fileData: text});
			console.log(data);
			//POP UP
			try {
				const url = "http://localhost:8080/api/serverFiles";
				const { data: res } = await axios.post(url, data);
				console.log(res.message);
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					setError(error.response.data.message);
				}
			}
		};
		reader.readAsText(event.target.files[0]);
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

			{/* <input type="file" className= "input"/> */}
			<input color="yellow" type="file" id="fileSelect" onChange={onFileChange}  />
			


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
