import { ContactForm } from '../components/ContactForm/ContactForm';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Section } from '../components/Section/Section';
import { SectionBackground } from '../components/SectionBackground/SectionBackground';
import { SectionContentWrapper } from '../components/SectionContentWrapper/SectionContentWrapper';
import { SectionHeading } from '../components/SectionHeading/SectionHeading';

export function Contact() {
  return (
    <Section id="contact">
      <SectionBackground bg="lightGray">
        <Container px={[3, 4]}>
          <SectionHeading>
            <Content id="contactHeading" />
          </SectionHeading>
        </Container>
        <SectionContentWrapper>
          <Container px={[3, 3, 3, 7]}>
            <ContactForm />
          </Container>
        </SectionContentWrapper>
      </SectionBackground>
    </Section>
  );
}
