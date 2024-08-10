import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

//Jest es un test runner, es decir un ejecutador de test; por eso se importa globalmente
// para tener acceso a las funciones de Jest como describe, it, expect, etc.

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});