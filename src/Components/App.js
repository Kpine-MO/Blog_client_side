import '../css/App.css';
import Home from './Home';
import Nav from './Nav';
import MyBlogs from './MyBlogs';
import Footer from './Footer';
import SignUp from './SignUp';
import Login from './Login';
import {  Route, Routes } from "react-router-dom";
import PostArticle from './PostArticle';


function App({onPost}) {
  return (
    <div className="App">
       <Nav/>
       {/* <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/my_account' element={<MyBlogs/>}/>
         <Route exact path='/post' element={<PostArticle onPost={onPost}/>}/>
         <Route exact path='/sign_up' element={<SignUp/>}/>
         <Route exact path='/login' element={<Login/>}/>
       </Routes> */}

       <Footer/>
    </div>
  );
}

export default App;
