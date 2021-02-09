import React from 'react'

class BohTipTable extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h2>Kitchen Tips</h2>
                    <h3>BOH Tips: $285.05</h3>
                    <h3>Total BOH Hours: 157.26</h3>
                    <h3>Tips Per Hour: $1.813</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Hours</th>
                                <th>Tips</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dario</td>
                                <td>4</td>
                                <td>$7.25</td>
                            </tr>
                            <tr>
                                <td>Manuel</td>
                                <td>30.5</td>
                                <td>$55.28</td>
                            </tr>
                            <tr>
                                <td>Sergio</td>
                                <td>21.25</td>
                                <td>$38.52</td>
                            </tr>
                            <tr>
                                <td>Nick</td>
                                <td>57.53</td>
                                <td>$104.28</td>
                            </tr>
                            <tr>
                                <td>Luis</td>
                                <td>43.98</td>
                                <td>79.72</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default BohTipTable