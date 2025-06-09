import { feelings } from '@/constants/story';

function FeelingIcon({
  value,
  size,
}: {
  value: string | undefined;
  size?: number;
}) {
  const feeling = feelings.find(feeling => feeling.value === value);
  return feeling ? <feeling.label size={size} /> : null;
}

export default FeelingIcon;
