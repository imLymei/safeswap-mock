export default function AppFormatter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex max-h-svh flex-1 p-2 selection:bg-blue-500 max-sm:flex-col max-sm:pb-0 sm:pl-0'>
      {children}
    </div>
  );
}
