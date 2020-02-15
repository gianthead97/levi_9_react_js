import React from 'react'
import './Scoreboard.css';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroes: [
                { pts : 23, date : "21.02.2010."},
                { pts : 26, date : "22.02.2010."},
                { pts : 33, date : "23.02.2010."},
                { pts : 43, date : "24.02.2010."},
                { pts : 53, date : "25.02.2010."},
            ]
        }
    }

    render() {
        const tableContent = this.state.scroes.map(
        score => <tr className="row" >
            <td className="cell">{score.pts}</td>
            <td className="cell">{score.date}</td>
            </tr>
        );
        
        return (
            <table className="table">
                {tableContent}
            </table>
        );
    }
}

export default Scoreboard;