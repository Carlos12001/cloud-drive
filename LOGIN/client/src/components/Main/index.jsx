import styles from "./styles.module.css";
import React, {useState} from "react";
import Select from 'react-select';
import axios from "axios";
import Popup from "../Popup";




const Main = () => {

	const[fileName, setFileName] = useState('');

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

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
	const Compression =()=>(
		<Select options={options}/>
	)

	function cambiarLabel
	(){
		//escoge el tipo de compresion
	};
	function descargarArchivo(){
		//lo que haga
	};
	function BuscarArchivo(){

	};
	const handleDowload =  async (event)=>{
		setuData({...uData,id:dId,path:dPath,data:dData});
		console.log(uData);
		event.preventDefault();
		try {
			const url = "http://localhost:8080/api/serverDecompression";
			const {data: res} = await axios.post(url, uData);
			console.log("a");
			console.log(res.data);
			console.log("tmr")
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
	const handleCrompress =  async (event)=>{
		setCompress(event.value);
		//console.log(compressSelect);

	}
	const setEmailFunction = ({ currentTarget: input })=>{
		setEmail(input.value)
	}
	const setdataD = ({ currentTarget: input })=>{
		setdData(input.value);
		console.log(dData);
	}
	const setpathD = ({ currentTarget: input })=>{
		setdPath(input.value);
		console.log(dPath);
	}
	const setIdD = ({ currentTarget: input })=>{
		setdId(input.value);
		console.log(dId);
	}

	const onFileChange = async (event) => {
		if(email !== "" && compressSelect !== "") {
			event.preventDefault()
			const files = event.target.files;
			setFileName(files[0].name);
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
					console.log(res.file);
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
				<ul id= 'NoHagoCaso'></ul>
				<p>
					{fileName}
				</p>
			</div>
		</div>
	);
};

export default Main;
