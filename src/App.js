
import React ,{Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import paginationFactory from 'react-bootstrap-table2-paginator';
class App extends Component{
  
 
  state={
    Items:[],
    columns:[
    //   {
    //     dataField:'albumid',
    //     text:'Album Id',
    // },
    {
       dataField:'id',
       text:'Id',
       sort:true,
    },
    {
      dataField:'title',
     text:'title',
      filter:textFilter()
    //   sort:true,
    },
   
   ]
  }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {    
                              console.log(response.data);    
        
                              this.setState({    
            
                                Items: response.data    
            
                              });    
            
                            });    
            
                          }   
    
        


      render()

      {

       return(
        
           
        <div className="container">  

                        <div class="row" className="hdr">    

                        <div class="col-sm-12 btn btn-info">    

                        

                         </div>    

                          </div>    

                        <div  style={{ marginTop: 20 }}>  
                                            <BootstrapTable   

                        striped  

                        hover  

                        keyField='id'   

                        data={ this.state.Items }   

                        columns={ this.state.columns }  

                        filter={ filterFactory() } 
                        paginator={paginationFactory}/>
                      </div>  

                      </div>  
       );
      }
}

 export default App;