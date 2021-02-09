import React from 'react'
import './Tips.css'

class Tips extends React.Component {
    render() {
        return (
            <div>
                <h1>Tips</h1>
                <section>
                    <h2>Select Date Range</h2>
                    <div>
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" name="start-date" id="start-date" />    
                    </div>
                    <div>
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" name="end-date" id="end-date" />    
                    </div>
                </section>
                <section>
                    <h2>December 28, 2020 - January 10, 2021</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>12/28/20</th>
                                <th>12/30/20</th>
                                <th>12/31/20</th>
                                <th>01/01/2101</th>
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

export default Tips