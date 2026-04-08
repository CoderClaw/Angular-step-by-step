import { Injectable, computed, signal } from "@angular/core";

import { AuthSession } from "../auth-session.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly storageKey = "angular-tutorial.lesson-13.session";
  private readonly session = signal<AuthSession | null>(this.loadSession());

  readonly isAuthenticated = computed(() => this.session() !== null);
  readonly currentUser = computed(() => this.session());

  // Este flujo de login simulado mantiene la leccion enfocada en patrones de Angular.
  // El componente no necesita saber como funcionan la persistencia o la forma de la sesion.
  login(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || normalizedPassword.length < 4) {
      return false;
    }

    const nextSession: AuthSession = {
      token: "mock-token-lesson-13",
      email: normalizedEmail,
      role: normalizedEmail.includes("admin") ? "Admin" : "Member",
    };

    this.session.set(nextSession);
    this.persistSession(nextSession);
    return true;
  }

  logout(): void {
    this.session.set(null);

    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(this.storageKey);
    }
  }

  private loadSession(): AuthSession | null {
    if (typeof localStorage === "undefined") {
      return null;
    }

    const storedValue = localStorage.getItem(this.storageKey);

    if (!storedValue) {
      return null;
    }

    try {
      return JSON.parse(storedValue) as AuthSession;
    } catch {
      return null;
    }
  }

  private persistSession(session: AuthSession): void {
    if (typeof localStorage === "undefined") {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(session));
  }
}
