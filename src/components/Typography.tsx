import React from 'react';

interface TypeSampleProps {
  name: string;
  className: string;
  description?: string;
}

const TypeSample: React.FC<TypeSampleProps> = ({ name, className, description }) => {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      <div className="mb-2">
        <div className="text-xs font-mono text-gray-500 mb-1">{name}</div>
        {description && (
          <div className="text-xs text-gray-400 mb-2">{description}</div>
        )}
      </div>
      <div className={className}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
};

export interface TypographyProps {
  showDisplay?: boolean;
  showHeadings?: boolean;
  showBody?: boolean;
  showUI?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  showDisplay = true,
  showHeadings = true,
  showBody = true,
  showUI = true,
}) => {
  return (
    <div className="p-6 bg-white max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Typography</h2>

      {showDisplay && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Display</h3>
          <TypeSample
            name="text-display"
            className="text-display text-text-heading"
            description="4rem / 1.1 line height / 700 weight"
          />
        </section>
      )}

      {showHeadings && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Headings</h3>
          <TypeSample
            name="text-h1"
            className="text-h1 text-text-heading"
            description="2.625rem (42px) / 1.06 line height / 400 weight"
          />
          <TypeSample
            name="text-h2"
            className="text-h2 text-text-heading"
            description="2.000rem (32px) / 1.09 line height / 400 weight"
          />
          <TypeSample
            name="text-h3"
            className="text-h3 text-text-heading"
            description="1.250rem (20px) / 1.09 line height / 400 weight"
          />
        </section>
      )}

      {showBody && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Body Text</h3>
          <TypeSample
            name="text-body"
            className="text-body text-text-paragraph1"
            description="0.875rem (14px) / 1.06 line height / 400 weight"
          />
          <TypeSample
            name="text-body-sm"
            className="text-body-sm text-text-paragraph2"
            description="0.750rem (12px) / 1.06 line height / 400 weight"
          />
          <TypeSample
            name="text-body-xs"
            className="text-body-xs text-text-paragraph2"
            description="0.625rem (10px) / 1.06 line height / 400 weight"
          />
        </section>
      )}

      {showUI && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">UI Elements</h3>
          <TypeSample
            name="text-button"
            className="text-button text-text-heading"
            description="0.875rem (14px) / 1.5 line height / 600 weight"
          />
          <TypeSample
            name="text-label"
            className="text-label text-text-paragraph1"
            description="0.750rem (12px) / 1.4 line height / 500 weight"
          />
        </section>
      )}

      {/* Font Family Showcase */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Font Families</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <div className="text-xs font-mono text-gray-500 mb-2">font-sans (Manrope)</div>
            <div className="font-sans text-body text-text-paragraph1">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <div className="text-xs font-mono text-gray-500 mb-2">font-mono</div>
            <div className="font-mono text-body text-text-paragraph1">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

