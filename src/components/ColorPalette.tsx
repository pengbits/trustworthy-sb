import React from 'react';

interface ColorSwatchProps {
  name: string;
  color: string;
  description?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, color, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-24 rounded-lg border border-gray-200 shadow-sm"
        style={{ backgroundColor: color, outline: '1px solid purple' }}
      >&nbsp;</div>
      <div>
        <div className="font-semibold text-sm text-gray-900">{name}</div>
        <div className="text-xs text-gray-600 font-mono">{color}</div>
        {description && (
          <div className="text-xs text-gray-500 mt-1">{description}</div>
        )}
      </div>
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  colors: Record<string, string | Record<string, string>>;
}

const ColorGroup: React.FC<ColorGroupProps> = ({ title, colors }) => {
  return (
    <div className="pb-4" style={{ border: '1px solid green' }}>
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(colors).map(([name, value]) => {
          if (typeof value === 'string') {
            return (
              <ColorSwatch
                key={name}
                name={name}
                color={value}
              />
            );
          }
          // Handle nested color objects (like primary.500)
          return Object.entries(value).map(([shade, shadeColor]) => (
            <ColorSwatch
              key={`${name}-${shade}`}
              name={shade === 'DEFAULT' ? name : `${name}-${shade}`}
              color={shadeColor as string}
            />
          ));
        })}
      </div>
    </div>
  );
};

export interface ColorPaletteProps {
  accentColors?: Record<string, string | Record<string, string>>;
  primaryColors?: Record<string, string | Record<string, string>>;
  secondaryColors?: Record<string, string | Record<string, string>>;
  textColors?: Record<string, string>;
  backgroundColors?: Record<string, string>;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  accentColors,
  primaryColors,
  secondaryColors,
  textColors,
  backgroundColors,
}) => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Color Palette</h2>
      
      {accentColors && Object.keys(accentColors).length > 0 && (
        <ColorGroup title="Accent Colors" colors={accentColors} />
      )}

      {textColors && Object.keys(textColors).length > 0 && (
        <ColorGroup title="Text Colors" colors={textColors} />
      )}
      
      {backgroundColors && Object.keys(backgroundColors).length > 0 && (
        <ColorGroup title="Background Colors" colors={backgroundColors} />
      )}
    </div>
  );
};

