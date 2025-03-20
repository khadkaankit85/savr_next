"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/@types/tracker";

interface PriceAlertsProps {
  trackedProducts: Product[];
}

export function PriceAlerts({ trackedProducts }: PriceAlertsProps) {
  const [alerts, setAlerts] = useState([
    { productId: 1, targetPrice: 80.00 },
    { productId: 2, targetPrice: 180.00 },
    { productId: 3, targetPrice: 45.00 }
  ]);

  const [editingAlert, setEditingAlert] = useState<{ productId: number, targetPrice: number } | null>(null);

  const handleEditAlert = (productId: number, targetPrice: number) => {
    setEditingAlert({ productId, targetPrice });
  };

  const handleSaveAlert = (productId: number, newTargetPrice: number) => {
    setAlerts(prev => prev.map(alert =>
      alert.productId === productId ? { ...alert, targetPrice: newTargetPrice } : alert
    ));
    setEditingAlert(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Alerts</CardTitle>
        <CardDescription>Get notified when prices drop below your target</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {trackedProducts.map((product) => {
            const alert = alerts.find(a => a.productId === product.id);
            return (
              <div key={product.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Alert when price drops below ${alert?.targetPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm">
                      Current: <span className="font-medium">${product.currentPrice}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditAlert(product.id, alert?.targetPrice || 0)}
                        >
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Price Alert</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="target-price">Target Price</Label>
                            <Input
                              id="target-price"
                              type="number"
                              step="0.01"
                              value={editingAlert?.targetPrice || 0}
                              onChange={(e) => setEditingAlert(prev => prev ? { ...prev, targetPrice: parseFloat(e.target.value) } : null)}
                            />
                          </div>
                          <div className="flex justify-end">
                            <Button
                              onClick={() => handleSaveAlert(product.id, editingAlert?.targetPrice || 0)}
                            >
                              Save Changes
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
