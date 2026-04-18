import { About } from './_components/About/About';
import { Contact } from './_components/Contact/Contact';
import { Home } from './_components/Home/Home';
import { Portfolio } from './_components/Portfolio/Portfolio';
import { Skills } from './_components/Skills/Skills';

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
};
