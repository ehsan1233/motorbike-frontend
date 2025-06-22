import MotorImage from '@/assets/Fighter-125.jpg'
import MotorbikeTile from './ProductTile.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  component: MotorbikeTile,
} satisfies Meta<typeof MotorbikeTile>

export default meta
type Story = StoryObj<typeof meta>

export const WithAccessibilityIssues: Story = {
  args: {
    name: 'Fighter 125 BC-RS',
    price: '12,999 €',
    description: 'Motorcycle Fighter 125 UMRV-RS black and matt Euro 5',
    image: MotorImage,
  },
}
