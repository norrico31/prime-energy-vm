import Navbar from './components/Navbar'
import Sample from './pages/Sample'


export default function App() {
	localStorage.setItem('token', JSON.stringify("1883|heZ3CDL5H16ptVawLSE2726VZE410HGFhfQcC42t"))
	return (
		<div>
			<Navbar />
			<Sample />
		</div>
	)
}
