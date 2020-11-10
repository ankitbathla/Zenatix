import React,{Component} from 'react';
import SearchBar from './Components/SearchbarComponent';
class App extends Component
{

    constructor(props)
    {
      super(props);
      this.state={


      }
    }
    render()
    {

      return(
        <div className="container">
            <SearchBar></SearchBar>
        </div>
      )
    }
}
export default App;