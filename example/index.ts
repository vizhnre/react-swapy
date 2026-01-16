import DefaultContainer, { Container as NamedContainer, Slot } from 'react-swapy';

console.log('Default export (Container):', DefaultContainer);
console.log('Named export (Container):', NamedContainer);
console.log('Named export (Slot):', Slot);

if (DefaultContainer === NamedContainer) {
  console.log('Default and named Container exports are the same. Backwards compatibility is maintained.');
} else {
  console.error('Default and named Container exports are different. This is a breaking change.');
}