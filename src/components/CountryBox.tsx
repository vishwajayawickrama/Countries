import './CountryBox.css';

function CountryBox(props: any) {
    return (
        <div className="container">
            <p>{props.name}</p>
            <p> Population - {props.population}</p>
            <p> Capital - {props.capital}</p>
            <p>Continent - {props.con} </p>
        </div>
    )
}

export default CountryBox;