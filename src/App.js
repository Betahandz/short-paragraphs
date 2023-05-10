import { useEffect, useState } from "react";
import Header from "./components/Header";
import Data from './components/Data';
import Loading from "./components/Loading";

const App = () => {
    const [digit, setDigit] = useState();
    const [text, setText] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const handleChange = event => {
        let {value} = event.currentTarget
        setDigit(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        let newText = [];
        if(digit > 20 || digit < 1) {
            newText.push(Data[0])
        }else {
            for(let x = 0; x < digit; x++) {
                let num = Math.floor(Math.random() * Data.length);
                newText.push(Data[num]);
            }
        }
        setText(newText);
    }

    return (
        <>
            <Header />
            <Loading loading={loading}/>
            <form className="myForm">
                    <label htmlFor="number">
                        Paragraph: 
                        <input
                        type="number" 
                        id="number" 
                        name="number"
                        placeholder="number of paragraph"
                        onChange={handleChange}
                        value={digit}
                        />
                    </label>
                    <button className="submit" onClick={handleSubmit}>
                        Generate
                    </button>
            </form>
            {(digit > 20 || digit <= 0) && <p className="warn" style={{textAlign: "center", color: "red"}}><i>Number should not exceed 100 or be less than 1</i></p>}
            <div className="display">
                {
                    text.map((item, index) => <p key={index} className="lorem">{item}</p>)
                }
            </div>
        </>
            
    )
}

export default App;