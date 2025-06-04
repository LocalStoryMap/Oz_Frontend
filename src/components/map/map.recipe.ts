import { cva } from '@root/styled-system/css';

export const IconWrapper = cva({
  base: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  variants: {
    size: {
      sm: { width: '8', height: '8', padding: '1' },
      md: { width: '10', height: '10', padding: '2' },
      lg: { width: '14', height: '14', padding: '2' },
    },
    border: {
      none: { borderWidth: '0' },
      gray: { borderWidth: '1px', borderColor: 'gray.200' },
      black: { borderWidth: '2px', borderColor: 'black' },
    },
    radius: {
      md: { borderRadius: 'md' },
      full: { borderRadius: 'full' },
    },
    shadow: {
      none: { boxShadow: 'none' },
      xs: { boxShadow: 'xs' },
    },
    margin: {
      xs: { margin: 1.5 },
    },
  },
  defaultVariants: {
    size: 'md',
    border: 'gray',
    radius: 'md',
    shadow: 'xs',
  },
});

export const CategoryTitle = cva({
  variants: {
    textStyle: {
      body3: { textStyle: 'body3' },
      body4: { textStyle: 'body4' },
      label1: { textStyle: 'label1' },
      label2: { textStyle: 'label2' },
    },
  },
  defaultVariants: {
    textStyle: 'body3',
  },
});
