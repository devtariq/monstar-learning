import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor() {
        console.log('constructor');
        super();
        this.state = {
            monstars: [],
            searchField: '',
        }
    }

    componentDidMount() {
        console.log('component didmount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return { monstars: users }
            }, () => {
                console.log(this.state);
            }))
    }
    render() {
        console.log('render');
        const filterMonsters = this.state.monstars.filter( (monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });

        const dd = this.state.monstars.filter( (monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });
        return (
            
            <div className="App">
                <input type="search" className='search-box' placeholder='Search Monster' onChange={ (event) => {
                    console.log({startingArr: this.state.monstars});
                    const searchField = event.target.value.toLocaleLowerCase();
                  
                    this.setState( () => {
                        return {searchField}
                       
                    }, () => { 
                        console.log({endingarry: this.state.monstars});
                    });
                }} />
                <header className="App-header">
                    {filterMonsters.map((monster) => {
                        return <div key="{monster.id}"><h2>{monster.name}</h2></div>
                    })}

                </header>
            </div>
        );
    }
}

export default App;
