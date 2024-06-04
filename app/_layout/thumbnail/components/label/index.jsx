/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2em, 7vw, 8em)',
      }}
    >
      <h5 className='text-md text-secondary-foreground'>{children}</h5>
    </div>
  );
}
