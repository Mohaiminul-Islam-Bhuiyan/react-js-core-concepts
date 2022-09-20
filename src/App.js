import logo from './logo.svg';
import './App.css';

const number = 555;
const singers = [{name: 'mahfuz vai', job: 'singer'},
{name: 'Agun', job: 'sing'},
{name: 'Eva Rahman', job: 'singer'}]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['rubel', 'bapparaz', 'kuber', 'jashim', 'salman shah', 'riaz', 'raz', 'anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h3>New component....</h3>
      <p>Rock mama... react mama</p>
      <Friend movie="singham" phone="0202020202"></Friend>
      <Friend phone="989"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props)
  return (
  <div className="person">
    <h1>{props.name}</h1>
    <p>Nayika: {props.nayika}</p>
  </div>
  )
}

function Friend (props) {
  console.log(props)
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;
