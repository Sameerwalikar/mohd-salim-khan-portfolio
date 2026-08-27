/**
 * JsonLd — safely renders a schema.org JSON-LD script tag.
 * Uses JSON.stringify to prevent XSS; no dangerouslySetInnerHTML risks beyond
 * the standard Next.js pattern for serialising plain data objects.
 */

type JsonLdSchema = Record<string, unknown>;

interface JsonLdProps {
  schema: JsonLdSchema | JsonLdSchema[];
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify on a controlled data object is the standard safe pattern.
      // There is no user input or external data in these schemas.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
