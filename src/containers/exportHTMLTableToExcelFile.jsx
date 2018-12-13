import React, {Component} from 'react';
import { FormGroup, Button } from 'react-bootstrap';


export default class ExportHtmlToExcel extends Component{
    
    constructor(props) {
        super(props);

        this.state = { 
        };       
          
    }

    nomeArquivo = () => {
        let name = "Relatorio";
        return  name;
    }
    
    base64 = (s) => {
        return window.btoa(unescape(encodeURIComponent(s)));
    }

    format = (s, c) => {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
        })
    }

    exportToExcel = () => {
        
        let { source } = this.props;
        
        if ((!source)||(source.length === 0)) {
            return [];
        }

        var tab_text;

        var rows = '';
        rows = "<tr>";
        rows += "<th bgcolor='#D3D3D3'> NOME </th>";
        rows += "<th bgcolor='#D3D3D3'> TELEFONE </th>";
        rows += "<th bgcolor='#D3D3D3'> CELULAR </th>";
        rows += "<th bgcolor='#D3D3D3'> DATA_NASCIMENTO </th>";
        rows += '</tr>';

        tab_text = rows;

        rows = '';

        source.map((item, i) => {

            rows += '<tr>'
            + '<td>' + item.NOME + '</td>'
            + '<td>' + item.TELEFONE + '</td>'
            + '<td>' + item.CELULAR + '</td>'
            + '<td>' + item.DATA_NASCIMENTO + '</td>'
            + '</tr>';
        });

        tab_text += rows;

        var data_type = 'data:application/vnd.ms-excel;base64,';
        var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table border="2px">{table}</table></body></html>';
        
        var ctx = {
            worksheet: "Contatos" || 'Worksheet',
            table: tab_text
        }

        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = this.nomeArquivo() + ".xls";
        link.href = data_type + this.base64(this.format(template, ctx));
        link.traget = "_blank";
        link.click();
    }

    render() {
        return( 
            <div>
                <FormGroup controlId="salvarControl">         
                    &nbsp;
                    <Button type="button" 
                        className="btn btn-success" 
                        onClick={this.exportToExcel}> 
                        <i className="glyphicon glyphicon-download-alt" aria-hidden="true" /> Baixar Arquivo
                    </Button>
                </FormGroup>    
            </div>
        );
    }
}


