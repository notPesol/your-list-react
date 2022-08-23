import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "./components/UI/Loading/Loading";

import Layout from "./components/Layout/Layout";

const List = React.lazy(() => import("./components/List/List"));
const AddCategoryForm = React.lazy(() =>
  import("./components/AddCategoryForm/AddCategoryForm")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/add-category" component={AddCategoryForm} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
