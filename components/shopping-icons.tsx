import { ShoppingBag, ShoppingCart, Tag, Percent, CreditCard, DollarSign, Gift, Truck } from "lucide-react"

export const ShoppingIcons = {
  ShoppingBag,
  ShoppingCart,
  Tag,
  Percent,
  CreditCard,
  DollarSign,
  Gift,
  Truck,
}

export function SavingsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 6v12" />
      <path d="M6 12h12" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

export function PriceDropIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 7 7 17" />
      <path d="M17 17H7V7" />
    </svg>
  )
}

export function PriceCompareIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

