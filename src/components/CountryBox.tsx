import './CountryBox.css';

function CountryBox(props: any) {
    const imagePath = `images/${props.code.toLowerCase()}.png`;
    const DarkMode = {
        color: "white",
        backgroundColor: '#222'
    }

    const LightMode = {
        color: '#333',
        backgroundColor: '#d7d7d7'
    }

    const myStyle = props.dark ? DarkMode : LightMode;
    return (
        <div className="container" style={myStyle}>
            <p className='head'>{props.name}</p>
            <div className='img'><img src={ imagePath } alt="Country-Flag" /></div>
            <p> Population - {props.population}</p>
            <p> Capital - {props.capital}</p>
            <p>Continent - {props.con} </p>
        </div>
    )
}

export default CountryBox;