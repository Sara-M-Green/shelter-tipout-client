import React from 'react'

class FohTipTable extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h2>December 28, 2020 - January 10, 2021</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>12/28/20</th>
                                <th>12/30/20</th>
                                <th>12/31/20</th>
                                <th>01/01/21</th>
                                <th>01/02/21</th>
                                <th>01/03/21</th>
                                <th>01/04/21</th>
                                <th>Total Bottles</th>
                                <th>Bottle Commission</th>
                                <th>Total Tips</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tucker</td>
                                <td>$405.15</td>
                                <td>$256.32</td>
                                <td>$173.87</td>
                                <td>$293.87</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                                <td>$236.94</td>
                                <td>24</td>
                                <td>$96.00</td>
                                <td>1734.95</td>
                            </tr>
            
                        
                            <tr>
                                <td>Sara</td>
                                <td>$49.11</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                                <td>$327.77</td>
                                <td>$209.44</td>
                                <td>$134.10</td>
                                <td>$118.47</td>
                                <td>20</td>
                                <td>$80.00</td>
                                <td>1569.37</td>
                            </tr>
                            <tr>
                                <td>Steph</td>
                                <td>$0.00</td>
                                <td>$234.96</td>
                                <td>$369.46</td>
                                <td>$282.56</td>
                                <td>$372.34</td>
                                <td>$344.84</td>
                                <td>$0.00</td>
                                <td>23</td>
                                <td>$92.00</td>
                                <td>$1734.95</td>
                            </tr>
                            <tr>
                                <td>BOH</td>
                                <td>$19.92</td>
                                <td>$13.94</td>
                                <td>$17.26</td>
                                <td>$31.17</td>
                                <td>$22.20</td>
                                <td>$12.96</td>
                                <td>$12.96</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$285.05</td>
                            </tr>
                            <tr>
                                <td>Prep</td>
                                <td>$19.02</td>
                                <td>$19.30</td>
                                <td>$29.44</td>
                                <td>$47.99</td>
                                <td>$27.16</td>
                                <td>$35.05</td>
                                <td>$12.96</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$271.83</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default FohTipTable