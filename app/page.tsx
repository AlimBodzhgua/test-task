import { Skills } from './_components/Skills/Skills';
import { About } from './_components/About/About';
import { Contact } from './_components/Contact/Contact';
import { Home } from './_components/Home/Home'

export default function MainPage() {
	return (
		<>
			<Home />
			<About />
			<Skills />
			<Contact />
		</>
	);
}
