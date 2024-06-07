import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/representation')({
  component: () => <div>Hello /representation!</div>
})