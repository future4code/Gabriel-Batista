import logo from "./img/Logo.png";
import search from "./img/searchicon.png";
import './App.css';

function App() {
  
  const video1 = "https://storage.googleapis.com/future-apis.appspot.com/1.mp4"
  const video2 = "https://storage.googleapis.com/future-apis.appspot.com/2.mp4"
  const video3 = "https://storage.googleapis.com/future-apis.appspot.com/3.mp4"
  const Video4 = "https://storage.googleapis.com/future-apis.appspot.com/4.mp4"
  const video5 = "https://storage.googleapis.com/future-apis.appspot.com/5.mp4"
  const video6 = "https://storage.googleapis.com/future-apis.appspot.com/6.mp4"
  const video7 = "https://storage.googleapis.com/future-apis.appspot.com/7.mp4"
  const video8 = "https://storage.googleapis.com/future-apis.appspot.com/8.mp4"
  const video9 = "https://storage.googleapis.com/future-apis.appspot.com/9.mp4"
  const video10 = "https://storage.googleapis.com/future-apis.appspot.com/10.mp4"
  const video11 = "https://storage.googleapis.com/future-apis.appspot.com/11.mp4"
    const titulo = 'Título do vídeo'
return (
  <div className="body">
  <header className="item" id="head">
  <a  href="./Index.html">
  <img src={logo}  width='400' height='80'/>
</a>

<input type="search" placeholder="Search.." />
</header>
<div className="container">
  <a  href="./Video1.html">
  <div className="item" id="videoThumb1">
      <video className="Home" src={video8} controls></video> 
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
<a  href="./Video2.html">
  <div className="item" id="videoThumb2">
      <video className="Home" src={video2} controls></video>
      <h2>{titulo}</h2> 
      <h4>teste</h4>
  </div>
</a>
<a  href="./Video3.html">
  <div className="item" id="videoThumb3">
      <video className="Home" src={video3} controls></video> 
      <h2>{titulo}</h2>
      <h4>teste</h4>
   </div>
  </a>
  <a  href="./Video4.html">
  <div className="item" id="videoThumb4">
      <video className="Home" src={video1} controls></video> 
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb5">
      <video className="Home" src={video5} controls></video> 
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb6">
      <video className="Home" src={Video4} controls></video>
     <h2>{titulo}</h2> 
     <h4>teste</h4>
</div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb7">
      <video className="Home" src={video7} controls></video>
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
<a  href="./Contato.html">
   <div className="item" id="videoThumb8">
      <video className="Home" src={video6} controls></video>
      <h2>{titulo}</h2>
      <h4>teste</h4> 
  </div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb9">
      <video className="Home" src={video2} controls></video> 
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb10">
      <video className="Home" src={video6}controls></video> 
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb11" URL='http://new-website.com'>
      <video className="Home" src={video3} controls></video>
      <h2>{titulo}</h2> 
      <h4>teste</h4>
  </div>
</a>
<a  href="./Contato.html">
  <div className="item" id="videoThumb12">
      <video className="Home" src={video8} controls></video>
      <h2>{titulo}</h2>
      <h4>teste</h4>
  </div>
</a>
</div>
<footer className="item"> <h4>Sou um Footer</h4> </footer>
</div>
  );
}

export default App;
