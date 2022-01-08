import { Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";

import HomePage from "./pages/Home";
import WelcomePage from "./pages/Welcome";
import QuestionairesPage from "./pages/Questionaires";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/welcome" element={<WelcomePage />} />
          <Route exact path="/questions" element={<QuestionairesPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
