import Modal from '@/components/ui/common/modals/Modal';
import { useModalStore } from '@/store/useModalStore';

function RouteMarkModal() {
  const { data, close } = useModalStore();

  return <Modal>{JSON.stringify(data)}</Modal>;
}

export default RouteMarkModal;
