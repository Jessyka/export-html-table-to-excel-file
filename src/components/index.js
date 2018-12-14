import React, {Component} from 'react';
import ListaTelefinicaTable from '../containers/tableListaTelefonica';
import ExportHtmlToExcel from '../containers/exportHTMLTableToExcelFile'
import {connect} from 'react-redux';

class PaginaInicial extends Component{
    constructor(props) {
        super(props);

        this.state = {

        };       
    }


    render(){
        
        
        if(!this.props.contatos)
        {
            return (
                <div className="container">
                &nbsp;&nbsp;
                    <div className="row" style={{ position: 'relative', paddingBottom: 0 }}>
                        <div className="col-md-8">
                            <h4>Exportar HTML table para arquivo Excel</h4>
                        </div>
                    </div> 
                </div>
            );
        }

        const { contatos }  = this.props;

        return(
            <div className="container">
                &nbsp;&nbsp;
                <div className="row" style={{ position: 'relative', paddingBottom: 0 }}>
                    <div className="col-md-8">
                        <h4>Exportar HTML table para arquivo Excel</h4>
                    </div>
                </div>
                &nbsp;&nbsp;
                <div className="row">
                    <div className="col-md-12">
                        <ListaTelefinicaTable source={contatos}/>
                    </div>
                </div>
                &nbsp;&nbsp;
                <div className="row">
                    <div className="col-md-12">
                        <ExportHtmlToExcel source={contatos}/>
                    </div>
                </div>
            </div>
        );
    }
}

function select(state) {
    return { contatos : state.contatos.listaContatos ? state.contatos.listaContatos : [] };
}

export default connect(select)(PaginaInicial);