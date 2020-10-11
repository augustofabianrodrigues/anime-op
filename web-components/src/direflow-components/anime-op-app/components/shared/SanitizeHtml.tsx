import React, { FC } from 'react';
import sanitizeHtml, { IOptions as SanitizeHTMLOptions } from 'sanitize-html';

function sanitize({ dirty, options }: SanitizeHtmlProps): { __html: string } {
  return {
    __html: sanitizeHtml(dirty, options),
  };
}

interface SanitizeHtmlProps {
  dirty: string;
  options?: SanitizeHTMLOptions;
}

const SanitizeHtmlComponent: FC<SanitizeHtmlProps> = (props) => {
  return <div dangerouslySetInnerHTML={sanitize(props)} />;
};

export default SanitizeHtmlComponent;
