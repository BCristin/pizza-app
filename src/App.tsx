import { useState } from 'react';
import { Button } from './componets/Button/Button';
import { Input } from './componets/Input/Input';

function App() {
	const [counter, setcounter] = useState(0);

	return (
		<div className="container">
			<Input />
			<Input />

			<Button onClick={() => setcounter(counter - 1)}>-1 ({counter})</Button>
			<Button onClick={() => setcounter(counter + 1)}>+1</Button>
		</div>
	);
}

export default App;
