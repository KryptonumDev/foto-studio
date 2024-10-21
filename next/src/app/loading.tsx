import Loader from '@/components/ui/Loader';

export default function Loading() {
  return (
    <div className='max-width loader-container'>
      <Loader loading={true} />
    </div>
  );
}
