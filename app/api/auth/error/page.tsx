import { redirect } from "next/navigation"

export default function Error() {
  redirect("/signup")
  return (
    <div>OOps</div>
  )
}

