// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Data from "./Pages/Databarang";
// import Add from "./pages/Tambah";
// import Edit from "./Pages/Edit";
// import Detail from "./Pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* <Route path="/barang" component={Data} /> */}
        {/* <Route path="/tambah" component={Add} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/detail" component={Detail} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
