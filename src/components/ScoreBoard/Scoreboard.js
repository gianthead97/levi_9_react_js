import React from 'react'
import './Scoreboard.css';
import getEntries from '../../api/fromServer';

class Scoreboard extends React.Component {
    state = {scores : []};

    componentDidMount() {
        this.fromBase();
    }
    async fromBase() {
        let values = await getEntries();
        values = values.sort((a, b) => b.pts - a.pts);
        values = values.slice(0, 5);
        this.setState({scores: values});
    }

    render() {
        
     
        let i = 1;
        let tableContent = this.state.scores.map(
        score => <tr className="row" >
            <td className="cell">{i++}.</td>
            <td className="cell">{score.pts}</td>
            <td className="cell">{score.date.substring(0, score.date.lastIndexOf('.')).replace('T', ' ')}</td>
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