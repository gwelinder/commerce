import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { QualityContentSection } from 'components/layout/front-copy';

export const metadata = {
  description: 'Smokely sælger vapes, snus og lovlig cannabis til gode priser med hurtig levering.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <QualityContentSection />
        </div>

        <ThreeItemGrid />
        <Carousel />
        <Footer />
      </main>
    </>
  );
}
