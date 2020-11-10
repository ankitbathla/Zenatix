import React,{Component} from 'react';
import {Button, ButtonGroup, Card, CardBody, CardHeader} from 'reactstrap';
import '../App.css';
class SearchBar extends Component{

    constructor(props)
    {
        super(props);
        this.handlechange=this.handlechange.bind(this);
        this.empty=this.empty.bind(this);
        this.state={
           search:'',
           results:["zenatix gurgaon","zenatix gurgaon address","ankit","internship","frontend"]

        }
    }
    handlechange=(e)=>{
        this.setState({
            search:e,
        })
    }
    empty=()=>{
        var item=this.refs.search.value;
        var add='';
       
        if(!this.state.results.includes(item))
        {
            console.log(item);
            add=item+add;
        }
        this.setState({
            results:[add,...this.state.results],
        });
    
    }
    render()
    {
       let fliteredresults=this.state.results.filter((item)=>{
           return item.indexOf(this.state.search)!=-1;
       });
        return(
            <Card className="mt-3 ml-6 size justify-content-center">
            <div className="container justify-content-center">
                    <CardHeader className="justify-content-center">
                    <div className="row">
                        <div className="mt-3 ml-5">
                        <strong>Search Bar </strong>
                        </div>
                    <input type="text" ref="search" defaultValue={''} className=" ml-1 resize col-5" onChange={(e)=>this.handlechange(e.target.value)}></input>
                    <ButtonGroup>
                    <Button className="btn btn-success ml-1"onClick={this.empty}><span className="fa fa-search fa-lg"></span></Button>
                    <Button className="btn btn-danger"><span className="fa fa-microphone fa-lg" ></span></Button>
                    </ButtonGroup>
                    </div>
                    </CardHeader>
                    <CardBody>
                    {this.state.search.length!=0?<div className="row">
                       {this.state.search.length!=0?fliteredresults.map((item)=>{
                            var first=item.indexOf(this.state.search);
                            var last=this.state.search.length;
                           return(
                               
                              <div className="col-12">
                                   <span className="fa fa-search li"></span>&ensp;
                                   
                                    {item.substr(0,first)}<mark className="mark">{item.substr(first,this.state.search.length)}</mark>{item.substr(first+this.state.search.length,item.length)}
                                </div>
                           )
                       }):null}
                   </div>:null}
                </CardBody>
            </div>
            </Card>
        )
    }

}
export default SearchBar; 