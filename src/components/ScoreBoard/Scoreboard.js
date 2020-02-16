import React from 'react'
import './Scoreboard.css';
import getEntries from '../../api/fromServer';

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
        console.log(getEntries());
        let i = 1;
        const tableContent = this.state.scroes.map(
        score => <tr className="row" >
            <td className="cell">{i++}.</td>
            <td className="cell">{score.pts}</td>
            <td className="cell">{score.date}</td>
            </tr>
        );
        
        return (
            <table className="table">
                <thead>
                    <tr class="header">
                    <th>Rank</th>
                    <th>Points</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {tableContent}
                </tbody>
            </table>
        );
    }
}

export default Scoreboard;