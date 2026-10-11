import './Home.css'
import {Button} from '../components/button/Button'
const Home = (props) => {
    console.log(props);
    
    return (
    <div className='home'>
        <h1>{props.title} {props.num}</h1>
        <Button/>
        <p>welcome home</p>
    </div>
   
    )
}

export default Home