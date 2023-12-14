import './App.css';
import Card from './components/card.component';
import Header from './components/header.component';

function App() {
	return (
		<div className='App'>
			<Header> </Header>
			<p>hello this is my portfolio. welcome.</p>
			<Card title={'hello there'} description={'here is some more detail on the above'} />
			<Card title={'see you soon come back anytime'} description={'hasta la vista'} />
		</div>
	);
}

export default App;
