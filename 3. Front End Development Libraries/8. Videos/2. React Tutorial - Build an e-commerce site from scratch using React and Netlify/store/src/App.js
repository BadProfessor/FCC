import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// to import the bootstrap dependency, had to run:
// yarn add babel-loader @babel/core --dev
// and then
// yarn remove babel-loader @babel/core --dev
// and for some weird reason it worked.

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">Column Number 1</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
