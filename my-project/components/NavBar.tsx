import Button from "@/components/ui/Button";

export type NavItem = {
  label: string;
  href: string;
};

interface NavBarProps {
  items: NavItem[];
}

export default function NavBar({ items }: NavBarProps) {
  return (
    <nav className="mt-4 flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <Button key={item.label} href={item.href} variant="ghost" size="md">
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
