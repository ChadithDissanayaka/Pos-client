import { Injectable, signal } from '@angular/core';

export type AlertType = 'success' | 'error' | 'info' | 'warning';

export interface AlertMessage {
  type: AlertType;
  message: string;
  id: number;
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  private _alerts = signal<AlertMessage[]>([]);
  private nextId = 0;

  alerts = this._alerts.asReadonly();

  show(message: string, type: AlertType = 'info', duration = 4000) {
    const id = ++this.nextId;
    this._alerts.update((a) => [...a, { type, message, id }]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
  }

  success(message: string, duration = 4000) {
    this.show(message, 'success', duration);
  }
  error(message: string, duration = 5000) {
    this.show(message, 'error', duration);
  }
  info(message: string, duration = 4000) {
    this.show(message, 'info', duration);
  }
  warning(message: string, duration = 4000) {
    this.show(message, 'warning', duration);
  }

  dismiss(id: number) {
    this._alerts.update((a) => a.filter((alert) => alert.id !== id));
  }
}
