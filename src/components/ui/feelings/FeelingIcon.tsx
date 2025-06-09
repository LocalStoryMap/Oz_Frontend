import { feelings } from '@/constants/story';

function FeelingIcon({ value }: { value: string }) {
  const feeling = feelings.find(feeling => feeling.value === value);
  return feeling ? <feeling.label /> : null;
}

export default FeelingIcon;
