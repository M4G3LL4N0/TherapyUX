import { redirect } from "next/navigation"

export default function NewSessionPage() {
  redirect("/app/sessions/new")
}
