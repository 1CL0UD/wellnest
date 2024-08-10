import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-lg">
          <Image
            src={'/assets/icons/logo-full.svg'}
            width={100}
            height={100}
            alt={'Logo'}
            className="mb-12 h-10 w-fit"
          />
        </div>
      </section>
    </main>
  );
}
