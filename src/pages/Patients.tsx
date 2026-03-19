import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Filter, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const patients = [
  { id: "1", name: "Maria Silva", age: 54, cpf: "***.***.***-12", lesions: 3, status: "high", lastVisit: "15/03/2026" },
  { id: "2", name: "João Santos", age: 67, cpf: "***.***.***-34", lesions: 1, status: "medium", lastVisit: "14/03/2026" },
  { id: "3", name: "Ana Oliveira", age: 42, cpf: "***.***.***-56", lesions: 2, status: "low", lastVisit: "13/03/2026" },
  { id: "4", name: "Carlos Mendes", age: 71, cpf: "***.***.***-78", lesions: 4, status: "high", lastVisit: "12/03/2026" },
  { id: "5", name: "Beatriz Costa", age: 38, cpf: "***.***.***-90", lesions: 1, status: "low", lastVisit: "11/03/2026" },
  { id: "6", name: "Roberto Lima", age: 59, cpf: "***.***.***-11", lesions: 2, status: "medium", lastVisit: "10/03/2026" },
];

const statusConfig = {
  low: { label: "Baixo Risco", className: "bg-risk-low-subtle text-risk-low" },
  medium: { label: "Atenção", className: "bg-risk-medium-subtle text-risk-medium" },
  high: { label: "Alto Risco", className: "bg-risk-high-subtle text-risk-high" },
};

export default function Patients() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pacientes</h1>
          <p className="text-sm text-muted-foreground mt-1">{patients.length} pacientes cadastrados</p>
        </div>
        <Button className="gap-2 font-semibold">
          <Plus className="w-4 h-4" /> Novo Paciente
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9 bg-card"
          />
        </div>
        <Button variant="outline" size="sm" className="gap-2 text-muted-foreground">
          <Filter className="w-3.5 h-3.5" /> Filtros
        </Button>
      </div>

      <div className="grid gap-3">
        {filtered.map((p, i) => {
          const s = statusConfig[p.status as keyof typeof statusConfig];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Card
                className="shadow-surface border-border hover:shadow-soft transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/patients/${p.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.age} anos · {p.cpf}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-muted-foreground">{p.lesions} lesões · {p.lastVisit}</p>
                    </div>
                    <Badge variant="secondary" className={`text-[10px] font-bold uppercase ${s.className}`}>
                      {s.label}
                    </Badge>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
