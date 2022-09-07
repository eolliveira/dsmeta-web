import imgHeader from '../../assets/img/img-header.svg';
import './style.css';

const Header = () => {
  return (
   <div className='header-container'>
    <img src={imgHeader} alt="Imagem do Cabeçalho" />
    <h1>DSMETA</h1>
    <p>Desenvolvido por Erick Oliveira</p>
   </div>
  );
};

export default Header;
