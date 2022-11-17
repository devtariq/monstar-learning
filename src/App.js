import { Component } from 'react';
import CardList from './components/card-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            monstars: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return { monstars: users }
            }, () => {
                //console.log(this.state);
            }))
    }
    changeSearch = (event) => {
        // console.log({startingArr: this.state.monstars});
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField }
        });
    }
    render() {
        //console.log('render');
        const filterMonsters = this.state.monstars.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <div className="App">
                <SearchBox className='search-box' pleaceholder='Search Monster'  onChangeHandler={this.changeSearch} />
                <CardList monsters={filterMonsters}></CardList>
            </div>
        );
    }
}

export default App;
