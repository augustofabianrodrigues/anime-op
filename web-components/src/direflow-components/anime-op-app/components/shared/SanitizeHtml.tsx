import React, { forwardRef, Ref, RefForwardingComponent } from 'react';
import sanitizeHtml, { IOptions as SanitizeHTMLOptions } from 'sanitize-html';

function sanitize({ dirty, options }: SanitizeHtmlProps): { __html: string } {
  return {
    __html: sanitizeHtml(dirty, options),
  };
}

interface SanitizeHtmlProps {
  ref?: Ref<HTMLDivElement>;
  dirty: string;
  options?: SanitizeHTMLOptions;
}

const SanitizeHtmlComponent: RefForwardingComponent<
  HTMLDivElement,
  SanitizeHtmlProps
> = forwardRef<HTMLDivElement, SanitizeHtmlProps>((props, ref) => {
  return <div ref={ref} dangerouslySetInnerHTML={sanitize(props)} />;
});

export default SanitizeHtmlComponent;
