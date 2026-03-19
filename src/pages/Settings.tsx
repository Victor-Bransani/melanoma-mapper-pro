import { motion } from "framer-motion";
import { User, Bell, FileDown, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
        <p className="text-sm text-muted-foreground mt-1">Gerencie seu perfil e preferências</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="shadow-surface border-border">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <User className="w-4 h-4" /> Perfil Médico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nome Completo</Label>
                <Input defaultValue="Dr. Rafael Ribeiro" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Especialidade</Label>
                <Input defaultValue="Dermatologia Oncológica" className="h-10" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">CRM</Label>
                <Input defaultValue="123456" className="h-10" disabled />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">UF</Label>
                <Input defaultValue="SP" className="h-10" disabled />
              </div>
            </div>
            <Button size="sm" className="font-semibold">Salvar Alterações</Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
        <Card className="shadow-surface border-border">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Bell className="w-4 h-4" /> Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Alertas de Alto Risco</p>
                <p className="text-xs text-muted-foreground">Receber notificação quando análises detectarem alto risco</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Resumo Semanal</p>
                <p className="text-xs text-muted-foreground">Relatório semanal por e-mail</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <Card className="shadow-surface border-border">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <FileDown className="w-4 h-4" /> Exportação de Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Exporte relatórios em formato PDF para documentação clínica.</p>
            <Button variant="outline" size="sm" className="gap-2">
              <FileDown className="w-3.5 h-3.5" /> Gerar Relatório PDF
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
