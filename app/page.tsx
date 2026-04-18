import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection/ContactSection';
import { HomeSection } from './HomeSection/HomeSection';
import { PortfolioSection } from './PortfolioSection';
import { SkillsSection } from './SkillsSection';

export default function MainPage() {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<PortfolioSection />
			<ContactSection />
		</>
	);
};
