import "./App.scss";
import CallToAction from "./components/CallToAction";
import {FaHandHoldingHeart} from "react-icons/fa";
import {GiBiceps} from "react-icons/gi";
import SuccessPage from "./pages/succesPage/Success";
import Nav from "./components/Nav";
import {Switch, Route} from "react-router-dom";
import Signup from "./components/Signup";

function App() {
    return (
        <>
            <Nav/>
            <Switch>
                <Route path="/discover">

                </Route>

                <Route path="/start-project">

                </Route>

                <Route path="/login">
                    <Signup/>
                </Route>

                <Route path="/success">
                    <SuccessPage/>
                </Route>

                <Route path="/">
                    <div className="cta-wrapper">
                        <aside className="cta cta--donate">
                            <CallToAction
                                icon={
                                    <FaHandHoldingHeart
                                        style={{color: "#730ec3", fontSize: "5em"}}
                                    />
                                }
                                background="white"
                                title="Donate to work you support"
                                description="Make your checkbook follow your heart"
                                button="purple"
                                btnText="Discover Projects"
                            />
                        </aside>
                        <aside className="cta cta--project">
                            <CallToAction
                                background="purple"
                                icon={<GiBiceps style={{color: "white", fontSize: "5em"}}/>}
                                title="Change is in your hands"
                                description="Start a project that changes the world"
                                button="white"
                                btnText="Start a project"
                            />
                        </aside>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default App;
