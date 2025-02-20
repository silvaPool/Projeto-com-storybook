import "./buttonPerso.css"
import PropTypes from 'prop-types';

function ButtonPerso({label, handleCLick}) {
  return <button onClick={handleCLick}>Entrar</button>;
}

ButtonPerso.propTypes = {
    label: PropTypes.string,
    handleCLick: PropTypes.func,
};

export default ButtonPerso;
