export default function Home() {
  return (
    <main>
      <h1>Storybook Vitest Bug Reproduction</h1>
      <p>This is a minimal reproduction case for the Storybook Vitest addon failing with Next.js 15.</p>
      <p>Run <code>npm run storybook</code> to see working UI testing.</p>
      <p>Run <code>npm run test-storybook</code> to see the failing CLI tests.</p>
    </main>
  );
}