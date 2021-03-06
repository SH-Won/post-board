import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage'
import FavoritePage from './views/FavoritePage/FavoritePage'
import EditProductPage from './views/EditProductPage/EditProductPage';


import UploadContainer from '../Component/Upload/Container/UploadContainer'
import LandingContainer from '../Component/Landing/Container/LandingContainer'
import DetailContainer from '../Component/Detail/DetailContainer';
import EditContainer from '../Component/Edit/Container/EditContainer';
import FavoriteContainer from '../Component/Favorite/Container/FavoriteContainer'
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
          <Route exact path="/" component={Auth(LandingContainer, null)} />
          <Route exact path="/user" component={Auth(LandingContainer, null)} />

          
          
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(UploadContainer, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailContainer,null)} />
          <Route exact path="/product/edit/:productId" component={Auth(EditContainer,true)} />

          <Route exact path="/favorite/like" component={Auth(FavoriteContainer,true)}/>
          <Route exact path="/favorite/dislike" component={Auth(FavoriteContainer,true)}/>
        
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
