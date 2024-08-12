import AppointmentForm from '@/components/forms/AppointmentForm';
import { getPatient } from '@/lib/actions/patient.actions';
import Image from 'next/image';

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container flex-1 justify-between">
          <Image
            src={'/assets/icons/logo-full.svg'}
            width={100}
            height={100}
            alt={'Logo'}
            className="mb-12 h-10 w-fit"
          />
        </div>
        <AppointmentForm
          type="create"
          userId={userId}
          patientId={patient.$id}
        />
        <p className="copyright pt-6">© 2024 CarePulse</p>
      </section>
      <div className="flex-1">
        <Image
          src={'/assets/images/appointment-img.png'}
          alt={'Appointment'}
          width={1000}
          height={1000}
          className="side-img w-full bg-bottom"
        />
      </div>
    </div>
  );
}
