import React from 'react';
import { colors } from '../../tokens';

interface ColorSwatchProps {
  name: string;
  value: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div 
      onClick={copyToClipboard}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '8px',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div
        style={{
          width: '120px',
          height: '80px',
          backgroundColor: value,
          borderRadius: '6px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          fontSize: '12px', 
          fontWeight: '500',
          color: 'var(--gray-12)',
          marginBottom: '2px',
        }}>
          {name}
        </div>
        <div style={{ 
          fontSize: '11px', 
          color: 'var(--gray-7)',
          fontFamily: 'monospace',
        }}>
          {value}
        </div>
      </div>
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  colorEntries: [string, string][];
}

const ColorGroup: React.FC<ColorGroupProps> = ({ title, colorEntries }) => {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ 
        fontSize: '16px', 
        fontWeight: '600',
        color: 'var(--gray-12)',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        {title}
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(136px, 1fr))',
        gap: '16px',
      }}>
        {colorEntries.map(([name, value]) => (
          <ColorSwatch key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
};

export const ColorPalette: React.FC = () => {
  // Group colors by category
  const colorGroups = {
    'Core Neutrals': [
      ['black', colors.black],
      ['charcoal', colors.charcoal],
      ['darkGray', colors.darkGray],
      ['mediumGray', colors.mediumGray],
    ],
    'Cool Neutrals': [
      ['lightGray', colors.lightGray],
      ['silver', colors.silver],
      ['ash', colors.ash],
      ['slate', colors.slate],
    ],
    'Warm Neutrals': [
      ['ivory', colors.ivory],
      ['beige', colors.beige],
      ['stone', colors.stone],
      ['taupe', colors.taupe],
    ],
    'Reds & Pinks': [
      ['coral', colors.coral],
      ['salmon', colors.salmon],
      ['blush', colors.blush],
      ['rose', colors.rose],
      ['dustyRose', colors.dustyRose],
      ['terracotta', colors.terracotta],
    ],
    'Oranges & Yellows': [
      ['peach', colors.peach],
      ['apricot', colors.apricot],
      ['butter', colors.butter],
      ['honey', colors.honey],
      ['mauve', colors.mauve],
      ['goldenrod', colors.goldenrod],
    ],
    'Greens': [
      ['mint', colors.mint],
      ['sage', colors.sage],
      ['olive', colors.olive],
      ['emerald', colors.emerald],
      ['seafoam', colors.seafoam],
      ['teal', colors.teal],
    ],
    'Blues': [
      ['sky', colors.sky],
      ['periwinkle', colors.periwinkle],
      ['powder', colors.powder],
      ['cerulean', colors.cerulean],
      ['orchid', colors.orchid],
      ['dusk', colors.dusk],
    ],
    'Purples': [
      ['lavender', colors.lavender],
      ['plum', colors.plum],
      ['amethyst', colors.amethyst],
      ['iris', colors.iris],
      ['lilac', colors.lilac],
      ['indigo', colors.indigo],
      ['magenta', colors.magenta],
    ],
    'Browns': [
      ['cocoa', colors.cocoa],
      ['coffee', colors.coffee],
      ['chocolate', colors.chocolate],
      ['espresso', colors.espresso],
      ['midnight', colors.midnight],
      ['graphite', colors.graphite],
    ],
  };

  return (
    <div style={{
      padding: '32px',
      backgroundColor: 'var(--gray-3)',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '700',
          color: 'var(--gray-12)',
          marginBottom: '8px',
        }}>
          Color System
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--gray-7)',
          marginBottom: '48px',
        }}>
          Click any color swatch to copy its hex value to clipboard
        </p>
        
        {Object.entries(colorGroups).map(([groupTitle, colorEntries]) => (
          <ColorGroup
            key={groupTitle}
            title={groupTitle}
            colorEntries={colorEntries as [string, string][]}
          />
        ))}
      </div>
    </div>
  );
};



