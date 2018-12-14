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
        return( 
            <div>
                <BootstrapTable data={source} options={options} hover condensed pagination>
                    <TableHeaderColumn
                        className="text-xs-center"
                        columnClassName="text-xs-center"
                        isKey
                        dataField='Codigo'
                        hidden>
                        Código
                    </TableHeaderColumn> 
                    <TableHeaderColumn
                        className="text-xs-center"
                        columnClassName="text-xs-center"
                        dataField='Nome'  
                        tdStyle={ { whiteSpace: 'normal' } } >
                        Nome
                    </TableHeaderColumn>                               
                    <TableHeaderColumn 
                        className="text-xs-center" 
                        columnClassName="text-xs-center"
                        dataField='Telefone'
                        tdStyle={ { whiteSpace: 'normal' } } >
                        Telefone
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                        className="text-xs-center" 
                        columnClassName="text-xs-center"
                        dataField='DataNascimento'
                        tdStyle={ { whiteSpace: 'normal' } }
                        >
                        Data Nascimento
                    </TableHeaderColumn>
                </BootstrapTable>
            </div> 
        );
    }


}