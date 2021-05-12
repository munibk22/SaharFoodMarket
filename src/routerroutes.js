import React, { Component } from "react";
import { Route, Router } from "react-router";

import Component1 from "./components/Component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Container1 from "./containers/container1";
import history from "./containers/history";


class Routes extends Component {
    render() {
        return (
            <div className="">

                {/* <Router history={history}>
                    <div className="">
                        <Route path="/container1" component={Container1} />
                        <Route path="/component/:id" component={Component1} />

                    </div>



                </Router> */}
            </div>
        )
    }
}

export default Routes;
