export type Role = 'student' | 'instructor';

export interface Milestone {
  id: string;
  title: string;
  durationMinutes: number;
  actualMinutes?: number;
  deadline: string;
  source: string;
  status: 'pending' | 'in_progress' | 'completed' | 'delayed';
  order: number;
  notes?: string;
}

export interface WeeklyPlan {
  id: string;
  weekNumber: number;
  title: string;
  startDate: string;
  endDate: string;
  availableHours: number;
  allocatedHours: number;
  isConfirmed: boolean;
  milestones: Milestone[];
  assumptions: string[];
}

export interface RiskAlert {
  id: string;
  milestoneTitle: string;
  plannedMinutes: number;
  actualMinutes: number;
  slackRemainingMinutes: number;
  deadlineNote: string;
  severity: 'warning' | 'critical';
  options: {
    id: string;
    title: string;
    description: string;
    tradeoff: string;
    isFeasible: boolean;
  }[];
}

export interface Citation {
  id: number;
  title: string;
  sourceSection: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: Citation[];
  isBlockedByGuardrail?: boolean;
  socraticHint?: string;
  timestamp: string;
}

export interface QuizQuestion {
  id: string;
  unit: string;
  prompt: string;
  options?: string[];
  type: 'open' | 'multiple_choice';
}

export interface EvidenceResult {
  id: string;
  status: 'forming' | 'basic' | 'proficient' | 'abstained';
  confidence: 'high' | 'medium' | 'low';
  evidenceText: string;
  recommendation: string;
  isOfficialGrade: false;
}

export interface ClassRiskOverview {
  totalStudents: number;
  onTrackRate: number; // percentage
  atRiskCount: number;
  needsReviewCount: number;
  privacyProtected: boolean; // true if n < 5
}
