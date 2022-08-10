import { Switch, Route } from "react-router-dom";
import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm";

import Layout from "./components/Layout/Layout";
import List from "./components/List/List";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/add-category" component={AddCategoryForm} />
      </Switch>
    </Layout>
  );
}

export default App;
