import React, { useState, useEffect } from 'react';
import Body from '../Body/Body';
import NavHeader from '../NavHeader/NavHeader';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Category from '../Category/Category';

const App = () => {

  const url = 'http://lbfbackend.herokuapp.com/data';
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get(url)
          .then((res) => {
              setData(data.concat(res.data));
          })
          .catch((err) => {
              console.log(err);
          })
  }, [])

  return (
    <div className="app-container">
      {data[0] &&
        <div>
          <NavHeader categories={data[0].LostProperty.Category}/>
          <Switch>
            <Route exact path="/" render={(props) => <Body {...props} data={data} />} />
            {data[0].LostProperty.Category.map((category, i) => 
              <Route key={i} path={"/" + category.Category.replace(/[()]/g, '')} render={(props) => <Category {...props} title={category.Category} subCatArr={category.SubCategory} />} />
            )} 
          </Switch>
        </div>
      }
    </div>
  );
}

export default App;
