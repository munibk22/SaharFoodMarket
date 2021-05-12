import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as ACTION_TYPES from "../store/actions/action-types";
import * as ACTIONS from "../store/actions/actions";


class Container1 extends Component {
    state = {
        nums: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
    }
    render() {
        const userText = "text 1"
        return (
            <div className="">
                <button onClick={() => console.log(this.props.stateprop1)}>Get State</button>


                <button onClick={() => this.props.action1()}>Dispatch Action 1 </button>
                <button onClick={() => this.props.action2()}>Dispatch Action 2 </button>


                <div className="margintop10">
                    <button onClick={() => this.props.action_creator1()}>Dispatch action_creator1 </button>
                    <button onClick={() => this.props.action_creator2()}>Dispatch action_creator2 </button>
                    <button onClick={() => this.props.action_creator3(userText)}>Dispatch action_creator3 </button>

                </div>


                {this.props.stateprop1 ? <h1>{this.props.userInput}</h1> : null}

                {this.state.nums.map((num) => {
                    return (
                        <Link key={num.id} to={{ pathname: "/component/" + num.id }}>Component {num.id} </Link>
                    )
                })}



            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stateprop1: state.reducer1.stateprop1,
        userInput: state.user_reducer.userInput,

    }
}

function mapDispatchToProps(dispatch) {
    return {

        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure()),
        action_creator3: (text) => dispatch(ACTIONS.userInput(text)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container1);
