import './CountryBox.css';

function CountryBox(props: any) {
    const imagePath = `images/${props.code.toLowerCase()}.png`;
    return (
        <div className="container">
            <p className='head'>{props.name}</p>
            <div className='img'><img src={ imagePath } alt="Country-Flag" /></div>
            <p> Population - {props.population}</p>
            <p> Capital - {props.capital}</p>
            <p>Continent - {props.con} </p>
        </div>
    )
}

export default CountryBox;