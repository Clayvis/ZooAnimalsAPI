import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import ZooAnimalsList from "./components/zooAnimalsList";

function App() {
	return (
		<Container fluid>
			<ZooAnimalsList />
		</Container>
	);
}

export default App;
