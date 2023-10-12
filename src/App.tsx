import { useState } from 'react';
import { Button } from './componets/Button/Button';
import Input from './componets/Input/Input';

function App() {
	const [counter, setcounter] = useState<number>(0);
	// <number> daca de zis exact ce e, dar default ea typul din caloarea default

	return (
		<div className="container">
			<Input placeholder="email"></Input>
			<Button onClick={() => setcounter(counter - 1)}>-1 ({counter})</Button>
			<Button appearence="big" onClick={() => setcounter(counter + 1)}>
				+1
			</Button>
		</div>
	);
}

export default App;
