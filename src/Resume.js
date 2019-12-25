import React from 'react';
import './Res.css'

function Resume() {
    return (
        <div className="container rounded">
            <div className="row">
                <div className="col-sm-4" >
                    <div id="sidebar">
                        <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                            className="img-fluid rounded-circle"
                            alt="Ashwini Sharma" />
                            <hr />
                        <h4><p>Ashwini Sharma</p></h4>
                    </div>
                </div>
                <div className="col-sm">
                    <div >
                        <div id="workExp" className="rounded">
                            <h1>Work Experience</h1>
                            <ul>
                                <li>
                                    May, 2018 to Jan, 2020
                                <ul>
                                        <li>
                                            <strong>  Project: DLAQM
                                         <br />   Client Name : AT&T.</strong>
                                            <br /> <p className="font-italic">   Java Developer </p>
                                            <p id="desc">
                                                DLAQM application performs audit on mission critical
                                                system of AT&T projects and provide detail element level
                                                discrepancy report to the end users.
                                                My primary role is to build an API to fetch the data from
                                                Microservices/Webservices/Restservice or any other
                                                methods described by the client.
                                            </p>
                                            <hr />
                                        </li>
                                        <br />

                                    </ul>
                                    <li>
                                        May, 2018 to July, 2019
                                    <ul>
                                            <li>

                                                <strong>  Project: EBM (Emerging Business Markets).
                                         <br />   Client Name : AT&T.</strong>
                                                <br /> <p className="font-italic"> System Support </p>
                                                <p id="desc">
                                                    I was part of the data migration team, where I have to
                                                    monitor the data has been migrated from Hive/Mongo DB
                                                    /SQL to Oracle, if any failure occurs have to load the data
                                                    manually for that day, check for any other issues and
                                                    create a ticket to the respective team for the same.
                                                 </p>
                                                <hr />
                                            </li>
                                        </ul>
                                        <br />
                                        <li>
                                            Sept, 2019 to Jan, 2020
                                            <ul>
                                                <li>
                                                    <strong>  Project: CCPA (California Customer Privacy Act)
                                         <br />   Client Name : AT&T.</strong>
                                                    <br /> <p className="font-italic"> Automation Developer </p>
                                                    <p id="desc">
                                                        CCPA application gives the customer to submit a request for
                                                        the data access that has been gathered by the Company for
                                                        the business use.
                                                        </p>
                                                    <hr />
                                                </li>
                                            </ul>
                                        </li>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume;