import { Button } from 'components/ui/button';
import { Leaf } from 'lucide-react';

export const QualityContentSection = () => {
  return (
    <section className="rounded-lg bg-gradient-to-r from-gray-800 to-gray-600 py-12 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h2 className="mb-4 flex items-center text-3xl font-bold">
              <Leaf className="mr-2" /> Kvalitet uden kompromis
            </h2>
            <p className="mb-4 text-lg">
              Vi sælger Snus, vapes og lovlige cannabisprodukter i Danmark og Sverige. Gå på
              opdagelse i vores udsgte univers af håndvalgte strains og cannabinoider.
            </p>
            <p className="text-lg">
              Smokely sætter kunden først og vi sørger altid for hurtig og diskret forsendelse.
            </p>
            <Button variant="secondary" className="mt-4">
              Se hele vores udvalg
            </Button>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img
              src="/placeholder.jpeg"
              alt="Cannabis produkter"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
