import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
      {/* TODO: OTP Verification */}
      <section className="remove-scrollbar container py-12 min-h-full">
        <div className="max-w-lg mb-8">
          <Image
            src={'/assets/icons/logo-full.svg'}
            width={100}
            height={100}
            alt={'Logo'}
            className="h-10 w-fit"
          />
        </div>
        <RegisterForm user={user} />
        <p className="copyright pt-6">© 2024 CarePulse</p>
      </section>
      <section className="hidden flex-1 md:block">
        <Image
          src={'/assets/images/register-img.png'}
          alt={'Onboarding'}
          width={1000}
          height={1000}
          className="side-img"
        />
      </section>
    </div>
  );
};

export default Register;
