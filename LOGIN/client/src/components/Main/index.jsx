import styles from "./styles.module.css";
import React, {useState} from "react";
import Select from 'react-select';
import axios from "axios";
import Popup from "../Popup";
import FileSaver from 'file-saver';

// var RNFS=require('react-native-fs');

// const makeFile = async (fileName, fileData, callback) =>{
// 	var path = './'+fileName;
// 	RNFS.writeFile(path, fileData, 'utf8')
// 		.then((success) => {
// 			callback();
// 		})
// 		.catch((err) => {
// 			console.log("write error:"+ err);
// 		});
// }

/**
 * the main of the progran
 * @returns {JSX.Element} the gui of the menu
 * @constructor the constror of the class
 */
const Main = () => {

	const[fileName, setFileName] = useState('');

	/**
	 * remove token
	 */
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	/**
	 * the inital state of the data
	 *
	 */
	const [data, setData] = useState({
		fileData: "",
		path: "",
		email: "",
		compression: ""
	});

	const [busqueda, setBusqueda]= useState("");
	const [error, setError] = useState("");
	const [buttonPopup, setButtonPopup] = useState(false);
	const [buttonDowload, setButtonDowload] = useState(false);
	const [dId, setdId] = useState("");
	const [dPath, setdPath] = useState("");
	const [dData, setdData] = useState("");
	//id path data
	const [uData, setuData] = useState({
		id: "",
		path: "",
		data: "",
	})
	const options = [
		{value: 'lz78', label: 'lz78'},
		{value: 'lz77', label: 'lz77'},
		{value: 'lzw', label: 'lzw'},
		{value: 'huffman', label: 'huffman'},
	]
	const [compressSelect, setCompress] = useState("");
	const [email, setEmail] = useState("");

	/**
	 * select the optioin
	 * @returns {JSX.Element} if error exust
	 * @constructor the constructor
	 */
	const Compression =()=>(
		<Select options={options}/>
	)

	/**
	 * cambiar el label de la bara
	 */
	function cambiarLabel
	(){
		//escoge el tipo de compresion
	};

	/**
	 * descar el elarchbio
	 */
	function descargarArchivo(){
		//lo que haga
	};
	function BuscarArchivo(){

	};
	/***
	 *
	 * @param event
	 * @returns {Promise<void>}
	 * Funcionalidad del boton de descargar
	 */
	const handleDowload =  async (event)=>{
		setuData({...uData,id:dId,path:dPath,data:dData});
		console.log(uData);
		event.preventDefault();
		try {
			const url = "http://localhost:8080/api/serverDecompression";
			const {data: res} = await axios.post(url, uData);
			let fd = (res.data[0]).fileData;
			let p = (res.data[0]).path;
			var blob = new Blob([fd], {type: "text/plain;charset=utf-8"});
			FileSaver.saveAs(blob, p);

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.message);
				console.log(error.response.message);
			}
		}
	}
	/**
	 *
	 * @param event
	 * @returns {Promise<void>}
	 * setea el tipo de compression
	 */
	const handleCrompress =  async (event)=>{
		setCompress(event.value);
		//console.log(compressSelect);

	}
	/**
	 *
	 * @param input
	 * setea el email utilizado
	 */
	const setEmailFunction = ({ currentTarget: input })=>{
		setEmail(input.value)
	}
	/**
	 *
	 * @param input
	 * seteo del dataFile
	 */
	const setdataD = ({ currentTarget: input })=>{
		setdData(input.value);
		console.log(dData);
	}
	/**
	 *
	 * @param input
	 * seteo del pathD
	 */
	const setpathD = ({ currentTarget: input })=>{
		setdPath(input.value);
		console.log(dPath);
	}
	/***
	 *
	 * @param input
	 * setteo del Id para descargar
	 */
	const setIdD = ({ currentTarget: input })=>{
		setdId(input.value);
		console.log(dId);
	}

	/**
	 * realiza el cambio en el fiel
	 * @param event el eceento
	 * @returns {Promise<void>} si todo fue correc
	 */
	const onFileChange = async (event) => {
		if(email !== "" && compressSelect !== "") {
			event.preventDefault()
			const files = event.target.files;
			setFileName(files[0].name);
			const labelInfo = document.getElementById('NoHagoCaso');
			let docInfo = document.createElement('li');

			console.log(files[0])
			console.log(files[0].name);
			const reader = new FileReader()
			reader.onload = async (eventReadFile) => {
				const text = (eventReadFile.target.result);
				const pathFile = (files[0].name);
				setData({...data, path: pathFile, fileData: text, email: email, compression: compressSelect});
				console.log(data);
				//POP UP
				try {
					const url = "http://localhost:8080/api/serverFiles";
					const {data: res} = await axios.post(url, data);
					docInfo.textContent = 'nombre: ' + files[0].name + ' , ' + 'id: ' + res.file[res.file.length-1]._id;
					labelInfo.appendChild(docInfo);
					console.log(res.file);
				} catch (error) {
					if(
						error.response &&
						error.response.status >= 400 &&
						error.response.status <= 500
					) {
						setError(error.response.data.message);
					}
				}
			};
			reader.readAsText(event.target.files[0]);
			setData({...data, path: "", fileData: "", email: "", compression: ""});

		}
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

			</div>

			{/* <input type="file" className= "input"/> */}
			<input color="yellow" type="file" id="fileSelect" onChange={onFileChange}/>




			<div className='compress-button-container'>
				<button onClick={()=>setButtonPopup(true)} className={styles.funtionalities_btn}>
					Comprimir archivo
				</button>
			</div>
			<div className='download-button-container'>
				<button onClick={()=>setButtonDowload(true)} className={styles.funtionalities_btn}>
					Descargar archivo
				</button>


			</div>
			<Popup trigger={buttonDowload} setTrigger={setButtonDowload}>
				<h3>Dowload</h3>
				<input
					type="id"
					placeholder="id"
					name="id"
					onChange={setIdD}
				/>
				<button type="submit" onClick={handleDowload}>
					Submit
				</button>
			</Popup>
			<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
				<h3>Informacion necesaria</h3>
				<Select options={options}
						onChange={handleCrompress}/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={setEmailFunction}
				/>
			</Popup>
			<div id= 'HagoLoQueMeDaLaGana'>
				<ol id= 'NoHagoCaso'></ol>
			</div>
		</div>
	);
};

export default Main;
