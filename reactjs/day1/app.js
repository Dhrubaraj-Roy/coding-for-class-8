const header1 = React.createElement('h1', {fontSize: '50px', backgroundColor: 'blue', color: 'white'}, 'Cavemen University is back');

//it is react 17 version
ReactDOM.render(header1, document.getElementById('root'));

//here is the 18th version of react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header1);
