import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 border-b">
      <div className="font-bold text-lg">Meu Portfólio</div>
      <div className="flex gap-4">
        <Button variant="ghost">Sobre</Button>
        <Button variant="ghost">Experiência</Button>
        <Button variant="ghost">Projetos</Button>
        <Button variant="default">Contato</Button>
      </div>
    </nav>
  )
}
