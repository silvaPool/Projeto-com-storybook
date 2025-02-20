import { useNavigate } from "react-router";

function Filmes() {

    const navigate = useNavigate();

    const clickHandler = () => navigate("/antigos");

    return (
        <div>
            <h2>Filmes</h2>

            <button className="buttonFilmes" onClick={clickHandler}>Filmes antigos</button>
            <button className="buttonFilmes">Filmes novos</button>
            <button className="buttonFilmes">Lançamentos</button>
        </div>
    )
}

export default Filmes;