const header1 = React.createElement('h1', {id: 'main-header', className: 'header',style:{fontSize: '50px', backgroundColor: 'red', color: 'white'}}, 'Cavemen University is back');

const header2 = React.createElement('h1', {id: 'main-header-2', className: 'header-2',style:{fontSize: '30px', backgroundColor: 'red', color: 'white'}}, 'By Tyrus');

const div = React.createElement('div',{}, [header1, header2]);
//it is react 17 version
ReactDOM.render(header1, document.getElementById('root'));

//here is the 18th version of react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
