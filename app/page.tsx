import PatientForm from '@/components/forms/PatientForm';
import PasskeyModal from '@/components/PasskeyModal';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={'/assets/icons/logo-full.svg'}
            width={100}
            height={100}
            alt={'Logo'}
            className="mb-12 h-10 w-fit"
          />
        </div>
        <PatientForm />
        <div className="flex justify-between text-14-regular mt-20">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 CarePulse
          </p>
          <Link href={'?admin=true'} className="text-green-500">
            Admin
          </Link>
        </div>
      </section>
      <Image
        src={'/assets/images/onboarding-img.png'}
        alt={'Onboarding'}
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
