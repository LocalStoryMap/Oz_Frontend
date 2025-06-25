'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/common/buttons/Button';
import { flex } from '@/components/ui/common/cards/card.recipe';
import Modal from '@/components/ui/common/modals/Modal';
import {
  modalText,
  routeModalLabel,
  routeModalP,
} from '@/components/ui/common/modals/modal.recipe';
import { useModalStore } from '@/store/useModalStore';
import { PostRoutePayload } from '@/types/route';

function CreateRouteModal() {
  const { close } = useModalStore();

  const [form, setForm] = useState({
    name: '',
    description: '',
    isPublic: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { target } = e;
    const { name, value, type } = target;

    const newValue =
      type === 'checkbox' ? (target as HTMLInputElement).checked : value;

    setForm(prev => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = () => {
    const payload: PostRoutePayload = {
      ...form,
    };
  };

  return (
    <Modal>
      <p className={modalText({ text: 'pageTitle' })}>나만의 루트 만들기</p>
      <label htmlFor="routeName" className={routeModalLabel()}>
        <p className={routeModalP()}>루트 이름</p>
        <input
          id="routeName"
          name="name"
          placeholder="생성할 루트명 입력"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="routeDes" className={routeModalLabel()}>
        <p className={routeModalP()}>설명</p>
        <textarea
          id="routeDes"
          name="description"
          placeholder="루트에 대한 설명을 입력하세요"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
      </label>
      <label htmlFor="routePublic" className={routeModalLabel()}>
        <input
          id="routePublic"
          type="checkbox"
          name="isPublic"
          checked={form.isPublic}
          onChange={handleChange}
        />
        <span className={routeModalP({ ml: 'sm' })}>공개 여부</span>
      </label>
      <div className={flex({ direction: 'row', gap: 'sm', marginT: 'sm' })}>
        <Button onClick={close} color="outlineSoft" size="md" radius="md">
          취소
        </Button>
        <Button onClick={handleSubmit} color="primary" size="md" radius="md">
          확인
        </Button>
      </div>
    </Modal>
  );
}

export default CreateRouteModal;
