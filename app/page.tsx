import { Skills } from './_components/Skills/Skills';
import { Contact } from './_components/Contact/Contact';
import { About } from './_components/About/About';
import { Home } from './_components/Home/Home'
import { Portfolio } from './_components/Portfolio/Portfolio';

export default function MainPage() {
	return (
		<>
			<Home />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</>
	);
}
