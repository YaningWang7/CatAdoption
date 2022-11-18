import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
    const [cats, setCats] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    //componentDidMount = useEffect(()=>{...}, []) put the empty array as the second parameter
    //which make the useEffect only run when mount but not after rendering
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(cats => setCats(cats))
    },[]);
    const onSearchChange = (event) => { 
        setSearchfield(event.target.value);
    }

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (!cats.length) ? 
    <h1>Loading</h1> :
    (
        <div className='tc'>
            <h1>Cat Adoption List</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList cats={filteredCats}/>  
                </ErrorBoundary>
            </Scroll>
        </div>
    )    
}

export default App;