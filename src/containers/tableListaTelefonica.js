import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class ListaTelefinicaTable extends Component{
    constructor(props) {
        super(props);

        this.state = { 
        };       
          
    }

    render() {

        const { source } = this.props;
        const options = { noDataText: 'Nenhum contato encontrado.',  };
        console.log(source);
        return( 
            <div>
                <BootstrapTable data={source} options={options} hover condensed pagination>
                    <TableHeaderColumn
                        className="text-xs-center"
                        columnClassName="text-xs-center"
                        isKey
                        dataField='CODIGO'
                        hidden>
                        Código
                    </TableHeaderColumn> 
                    <TableHeaderColumn
                        className="text-xs-center"
                        columnClassName="text-xs-center"
                        dataField='NOME'  
                        tdStyle={ { whiteSpace: 'normal' } } >
                        Nome
                    </TableHeaderColumn>                               
                    <TableHeaderColumn 
                        className="text-xs-center" 
                        columnClassName="text-xs-center"
                        dataField='TELEFONE'
                        tdStyle={ { whiteSpace: 'normal' } } >
                        Telefone
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                        className="text-xs-center" 
                        columnClassName="text-xs-center"
                        dataField='CELULAR' 
                        tdStyle={ { whiteSpace: 'normal' } }
                        >                        
                        Celular
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                        className="text-xs-center" 
                        columnClassName="text-xs-center"
                        dataField='DATA_NASCIMENTO'
                        tdStyle={ { whiteSpace: 'normal' } }
                        >
                        Data Nascimento
                    </TableHeaderColumn>
                </BootstrapTable>
            </div> 
        );
    }


}