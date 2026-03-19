import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, ScanLine, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const timeline = [
  { date: "15/03/2026", zone: "Antebraço Esquerdo", risk: "high", notes: "Lesão irregular com policromia detectada" },
  { date: "01/02/2026", zone: "Tórax Anterior", risk: "low", notes: "Nevo simétrico, sem alterações" },
  { date: "10/12/2025", zone: "Ombro Direito", risk: "medium", notes: "Bordas levemente irregulares, acompanhar" },
  { date: "05/10/2025", zone: "Coxa Direita", risk: "low", notes: "Lesão benigna, sem evolução" },
];

const riskConfig = {
  low: { label: "Baixo", className: "bg-risk-low-subtle text-risk-low" },
  medium: { label: "Atenção", className: "bg-risk-medium-subtle text-risk-medium" },
  high: { label: "Alto", className: "bg-risk-high-subtle text-risk-high" },
};

export default function PatientProfile() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <button onClick={() => navigate("/patients")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Voltar para Pacientes
      </button>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="shadow-surface border-border">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">MS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Maria Silva</h1>
                  <p className="text-sm text-muted-foreground">54 anos · Feminino · CPF: ***.***.***-12</p>
                  <p className="text-xs text-muted-foreground mt-1">Fototipo III (Fitzpatrick) · Histórico familiar: Sim</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" onClick={() => navigate("/mapping")}>
                  <ScanLine className="w-3.5 h-3.5" /> Nova Lesão
                </Button>
                <Badge variant="secondary" className="bg-risk-high-subtle text-risk-high text-[10px] font-bold uppercase">
                  Alto Risco
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timeline */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
        <Card className="shadow-surface border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Histórico de Lesões
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {timeline.map((entry, i) => {
                const r = riskConfig[entry.risk as keyof typeof riskConfig];
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${entry.risk === "high" ? "bg-destructive" : entry.risk === "medium" ? "bg-warning" : "bg-success"}`} />
                        {i < timeline.length - 1 && <div className="w-px h-full bg-border mt-1" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground tabular-nums">{entry.date}</span>
                          </div>
                          <Badge variant="secondary" className={`text-[10px] font-bold uppercase ${r.className}`}>
                            {r.label}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-foreground mt-1 flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-primary" /> {entry.zone}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{entry.notes}</p>
                      </div>
                    </div>
                    {i < timeline.length - 1 && <Separator />}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
