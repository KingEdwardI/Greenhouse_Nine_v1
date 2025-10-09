import { Dropdown } from './Dropdown';

const sections = [
  {
    label: 'Fruits',
    items: [
      { label: 'Apple' },
      { label: 'Banana' },
      { label: 'Cherry' },
    ],
  },
  {
    label: 'Vegetables',
    items: [
      { label: 'Carrot' },
      { label: 'Lettuce' },
    ],
  },
];

export const Default = () => (
  <Dropdown label="Pick item" sections={sections} />
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
    <Dropdown size="sm" label="Small" sections={sections} />
    <Dropdown size="md" label="Medium" sections={sections} />
    <Dropdown size="lg" label="Large" sections={sections} />
  </div>
);

export const Alignment = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', padding: 40 }}>
    <Dropdown label="Start Align" sections={sections} align="start" />
    <Dropdown label="Center Align" sections={sections} align="center" />
    <Dropdown label="End Align" sections={sections} align="end" />
  </div>
);

export const Position = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', padding: 60 }}>
    <Dropdown label="Bottom" sections={sections} side="bottom" />
    <Dropdown label="Top" sections={sections} side="top" />
    <Dropdown label="Left" sections={sections} side="left" />
    <Dropdown label="Right" sections={sections} side="right" />
  </div>
);




