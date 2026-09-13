import { SHMClient } from '@kolapsis/shm-sdk';

// Global to prevent multiple instances during HMR in development
const globalForTelemetry = global as unknown as { 
  telemetry?: SHMClient;
  telemetryStarted?: boolean;
  metricsStore?: Record<string, number>;
};

// In-memory store for custom metrics
export const metricsStore: Record<string, number> = globalForTelemetry.metricsStore || {
  applications_submitted: 0,
  page_views: 0,
  active_users: 0,
};

export const telemetry = globalForTelemetry.telemetry || new SHMClient({
  serverUrl: process.env.SHM_SERVER_URL || 'http://localhost:8080',
  appName: 'JU-Socialz',
  appVersion: process.env.npm_package_version || '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  // Enabled by default if SHM_SERVER_URL is provided or in dev if SHM_ENABLED=true
  enabled: process.env.NODE_ENV === 'production' || process.env.SHM_ENABLED === 'true',
});

if (process.env.NODE_ENV !== 'production') {
  globalForTelemetry.telemetry = telemetry;
  globalForTelemetry.metricsStore = metricsStore;
}

export function trackMetric(key: keyof typeof metricsStore, increment = 1) {
  if (typeof metricsStore[key] === 'number') {
    metricsStore[key] += increment;
  }
}

// Only start once
if (typeof window === 'undefined' && !globalForTelemetry.telemetryStarted) {
  globalForTelemetry.telemetryStarted = true;
  
  telemetry.setProvider(() => {
    return {
      ...metricsStore
    };
  });

  try {
    telemetry.start();
    console.log('[Telemetry] SHM Client started');
  } catch (error) {
    console.error('[Telemetry] Failed to start SHM Client:', error);
  }
}
