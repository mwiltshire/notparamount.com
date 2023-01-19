import { Layout } from '../layouts/Layout';
import { ContentProvider } from '../providers/ContentProvider';
import { SiteContent, fetchContent } from '../services/contentful';
import { Home } from '../sections/Home';
import { Services } from '../sections/Services';
import { Audio } from '../sections/Audio';
import { About } from '../sections/About';
import { Gear } from '../sections/Gear';
import { Contact } from '../sections/Contact';
import { Stack } from '../components/Stack/Stack';
import { DrumTracking } from '../sections/DrumTracking';

interface IndexProps {
  content: SiteContent;
}

function Index({ content }: IndexProps) {
  return (
    <ContentProvider content={content}>
      <Layout>
        <Stack>
          <Home />
          <DrumTracking />
          <About />
          <Services />
          <Audio />
          <Gear />
          <Contact />
        </Stack>
      </Layout>
    </ContentProvider>
  );
}

export async function getStaticProps() {
  const content = await fetchContent();
  return { props: { content } };
}

export default Index;
