import { motion } from "framer-motion";
import { Users, ScanLine, Clock, AlertTriangle, TrendingUp, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { label: "Pacientes Ativos", value: "127", icon: Users, change: "+4 esta semana", trend: "up" },
  { label: "Lesões Mapeadas", value: "342", icon: ScanLine, change: "+12 este mês", trend: "up" },
  { label: "Análises Pendentes", value: "8", icon: Clock, change: "3 urgentes", trend: "neutral" },
  { label: "Alertas Alto Risco", value: "5", icon: AlertTriangle, change: "2 novos", trend: "alert" },
];

const recentPatients = [
  { name: "Maria Silva", age: 54, lastVisit: "15/03/2026", lesions: 3, status: "high" },
  { name: "João Santos", age: 67, lastVisit: "14/03/2026", lesions: 1, status: "medium" },
  { name: "Ana Oliveira", age: 42, lastVisit: "13/03/2026", lesions: 2, status: "low" },
  { name: "Carlos Mendes", age: 71, lastVisit: "12/03/2026", lesions: 4, status: "high" },
  { name: "Beatriz Costa", age: 38, lastVisit: "11/03/2026", lesions: 1, status: "low" },
];

const statusConfig = {
  low: { label: "Baixo", className: "bg-risk-low-subtle text-risk-low" },
  medium: { label: "Atenção", className: "bg-risk-medium-subtle text-risk-medium" },
  high: { label: "Alto", className: "bg-risk-high-subtle text-risk-high" },
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Olá, Dr(a). Ribeiro</h1>
        <p className="text-sm text-muted-foreground mt-1">Visão geral do seu painel clínico</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="shadow-surface border-border hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{m.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1 tabular-nums">{m.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {m.trend === "up" && <TrendingUp className="w-3 h-3 text-success" />}
                      {m.trend === "alert" && <AlertTriangle className="w-3 h-3 text-destructive" />}
                      <span className={`text-[11px] font-medium ${m.trend === "alert" ? "text-destructive" : "text-muted-foreground"}`}>
                        {m.change}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Patients Table */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <Card className="shadow-surface border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Pacientes Recentes
              </CardTitle>
              <a href="/patients" className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
                Ver todos <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Paciente</th>
                    <th className="text-left py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Idade</th>
                    <th className="text-left py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Última Consulta</th>
                    <th className="text-left py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lesões</th>
                    <th className="text-left py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Risco</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPatients.map((p) => {
                    const s = statusConfig[p.status as keyof typeof statusConfig];
                    return (
                      <tr key={p.name} className="border-b border-border/50 hover:bg-accent/30 transition-colors cursor-pointer">
                        <td className="py-3 px-3 font-medium text-foreground">{p.name}</td>
                        <td className="py-3 px-3 text-muted-foreground tabular-nums">{p.age} anos</td>
                        <td className="py-3 px-3 text-muted-foreground tabular-nums">{p.lastVisit}</td>
                        <td className="py-3 px-3 text-muted-foreground tabular-nums">{p.lesions}</td>
                        <td className="py-3 px-3">
                          <Badge variant="secondary" className={`text-[10px] font-bold uppercase ${s.className}`}>
                            {s.label}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
