
import {useState, useEffect} from 'react'; 
import "./style.css/"
import Card from '../../componentes/Card'
import R from "../../assets/R.png/"
import Rodape from '../../componentes/Rodape'
function PaginaInicial(){
const [nomeAluno, setNomeAluno] = useState("Digite um nome...");    

const [alunos, setAlunos] = useState([]);

const [usuario, setUsuario] = useState({nome:"Ulbra CSL", foto:{R}})

function addAluno(){
    const novoAluno={
        nome: nomeAluno,
        hora: new Date().toLocaleTimeString("pt-br",{
            hour:"2-digit", minute: "2-digit", second: "2-digit"
        })
    }
    setAlunos(alunosAnteriores=>[...alunosAnteriores, novoAluno])
}
 useEffect(() => {
 fetch('https://randomuser.me/api').then(response => response.json()).then(data => {
    setUsuario({nome: data.results[0].name.first, foto: data.results[0].picture.large})})
 }, []);



    return(
    <div className="container">
    <h1>Lista de presença</h1>
    <div className="titulo">
        <strong>{usuario.nome}</strong>
        <img src={usuario.foto} alt="" />
    </div>
    <input 
    type="text" 
    placeholder="Digite um nome"
    onChange={e => setNomeAluno(e.target.value)} />
    <button 
    type="button"
    onClick={addAluno}>Adicionar</button>
         
    {
     alunos.map(aluno => <Card key={aluno.hora} nome={aluno.nome} hora={aluno.hora}/>)   
    }    
    <Rodape></Rodape>
    </div>
    )
    
}
export default PaginaInicial