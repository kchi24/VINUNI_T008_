'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  ExternalLink,
  Send,
  UserCheck,
  Check,
  RefreshCw,
  Info,
  Lock,
  MessageSquareQuote,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Role, WeeklyPlan, RiskAlert, ChatMessage, Citation } from '@/types';
import { mockWeeklyPlan, mockRiskAlert, mockQuizQuestions, mockClassOverview } from '@/lib/mockData';

export default function Home() {
  const [role, setRole] = useState<Role>('student');
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Plan State
  const [plan, setPlan] = useState<WeeklyPlan>(mockWeeklyPlan);
  const [planSaved, setPlanSaved] = useState<boolean>(false);

  // Recover State
  const [selectedOption, setSelectedOption] = useState<string>('opt-a');
  const [recoverSaved, setRecoverSaved] = useState<boolean>(false);

  // Q&A Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Chào bạn! Mình là PaceWise. Bạn có thể hỏi bất kỳ khái niệm nào trong tài liệu môn học. Mọi câu trả lời đều được đối chiếu và trích nguồn cụ thể.',
      citations: [
        {
          id: 1,
          title: 'Syllabus môn học, mục 3.2',
          sourceSection: 'Chương trình giảng dạy tuần 3',
          content: 'Mục 3.2 quy định sinh viên cần nắm vững cơ chế phân bổ tải và các ràng buộc về đồng thuận phân tán trước khi bắt đầu bài tập lớn.',
        },
      ],
      timestamp: '09:15',
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [selectedCitation, setSelectedCitation] = useState<Citation | null>(null);

  // Quiz State
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Reflect State
  const [reflectGood, setReflectGood] = useState('');
  const [reflectBad, setReflectBad] = useState('');
  const [reflectNext, setReflectNext] = useState('');
  const [reflectSaved, setReflectSaved] = useState(false);

  // Send Chat
  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuestion;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuestion('');

    // Check Guardrail (Cheating request simulation)
    const isCheating = query.toLowerCase().includes('làm hộ') || query.toLowerCase().includes('viết code hoàn chỉnh nộp') || query.toLowerCase().includes('đáp án nộp');

    setTimeout(() => {
      if (isCheating) {
        const guardrailMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Mình không thể tạo bài làm hoặc viết đáp án hoàn chỉnh để nộp.',
          isBlockedByGuardrail: true,
          socraticHint: 'Hãy chia sẻ đoạn mã hoặc hướng tiếp cận bạn đã thử; mình sẽ gợi ý bước tư duy tiếp theo để hoàn thiện!',
          citations: [
            {
              id: 2,
              title: 'Quy tắc liêm chính học thuật (Code of Conduct §4)',
              sourceSection: 'Chính sách nộp bài & Đánh giá',
              content: 'Sinh viên phải tự mình lập luận và thực hiện mã nguồn nộp; công cụ hỗ trợ chỉ đóng vai trò giải thích khái niệm.',
            },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, guardrailMsg]);
      } else {
        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Cơ chế đồng thuận Byzantine (BFT) yêu cầu n ≥ 3f + 1 node để hệ thống đạt được sự thống nhất dù có tối đa f node gặp lỗi hoặc gửi thông tin sai lệch có chủ đích.',
          citations: [
            {
              id: 1,
              title: 'Lecture 04: Hệ phân tán nâng cao',
              sourceSection: 'Slide 14 — Giới hạn Byzantine',
              content: 'Để vượt qua f kẻ phản bội truyền thông tin sai lệch cho cả hai phía, số node trung thực (n - f) phải lớn hơn tổng số node phản bội cộng với ngưỡng sai số biểu quyết: (n - f) > 2f => n >= 3f + 1.',
            },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 1. TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
            PW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white">PaceWise</h1>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                EDU-01 · P-008
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Trợ lý học tập AI theo chu trình Plan–Do–Reflect</p>
          </div>
        </div>

        {/* Snapshot Badge & Role Switcher */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Canvas: <strong>09:10 hôm nay</strong> (Dữ liệu mô phỏng)</span>
          </div>

          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => {
                setRole('student');
                if (activeTab === 'instructor') setActiveTab('overview');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                role === 'student'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sinh viên
            </button>
            <button
              onClick={() => {
                setRole('instructor');
                setActiveTab('instructor');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                role === 'instructor'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Giảng viên
            </button>
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 bg-slate-900/60 border-r border-slate-800 p-4 flex flex-col gap-1 shrink-0">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
            {role === 'student' ? 'Student Experience' : 'Management Console'}
          </div>

          {role === 'student' ? (
            <>
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Tổng quan tuần (S1)</span>
              </button>

              <button
                onClick={() => setActiveTab('plan')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'plan'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                <div className="flex items-center justify-between flex-1">
                  <span>Kế hoạch tuần (S2–S4)</span>
                  {!planSaved && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                </div>
              </button>

              <button
                onClick={() => setActiveTab('recover')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'recover'
                    ? 'bg-amber-600/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <div className="flex items-center justify-between flex-1">
                  <span>Phục hồi (S5–S7)</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-full font-bold">1 lệch</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('chat')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'chat'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <MessageSquareQuote className="w-4 h-4 text-indigo-400" />
                <span>Hỏi đáp có nguồn (S8–S9)</span>
              </button>

              <button
                onClick={() => setActiveTab('check')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'check'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Kiểm tra hiểu bài (S10–S11)</span>
              </button>

              <button
                onClick={() => setActiveTab('reflect')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'reflect'
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Phản tư cuối tuần (S12)</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'instructor'
                    ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>Tổng quan lớp (I1)</span>
              </button>
            </>
          )}

          <div className="mt-auto pt-4 border-t border-slate-800/60 text-xs text-slate-400">
            <div className="flex items-center gap-2 mb-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Phiên bản UI: 1.0 (Demo MVP)</span>
            </div>
            <p className="text-[11px] text-slate-400">Tuân thủ nghiêm ngặt chuẩn UX: Không phán xét · Trích nguồn rõ ràng · Người dùng kiểm soát.</p>
          </div>
        </aside>

        {/* MAIN VIEWPORT */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto max-w-6xl">
          {/* ==================================================== */}
          {/* TAB 1: S1 — TỔNG QUAN TUẦN                           */}
          {/* ==================================================== */}
          {activeTab === 'overview' && role === 'student' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header Card */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Tuần 3 · 23–29/09</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Xin chào Minh, đây là nhịp học tuần này</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      Tiến độ 62%
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                      1 Cảnh báo trễ
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700/50">
                  <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-3 rounded-full transition-all duration-500" style={{ width: '62%' }} />
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Đã học: 4,5 giờ</span>
                  <span>Quỹ thời gian còn lại: 1,5 giờ</span>
                </div>
              </div>

              {/* NEXT ACTION HERO CARD */}
              <div className="bg-indigo-950/40 border-2 border-indigo-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Việc quan trọng cần làm tiếp theo</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ôn tập đơn vị kiến thức B: Cấu trúc dữ liệu nâng cao
                </h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  <strong>Lý do ưu tiên:</strong> Cần hoàn thành trước khi chuyển sang làm Milestone A của Assignment 2; deadline nội bộ trong 2 ngày tới.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveTab('check')}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/30 flex items-center gap-2"
                  >
                    <span>Bắt đầu ôn tập (45 phút)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTab('recover')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
                  >
                    Cập nhật thời gian thực tế
                  </button>
                  <button
                    onClick={() => setActiveTab('chat')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
                  >
                    Hỏi tài liệu môn
                  </button>
                </div>
              </div>

              {/* DEADLINE & RISK WARNING BANNER */}
              <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-200">
                      Assignment 2 — Hạn nộp: Thứ Sáu 27/09 (còn 1 ngày 8 giờ)
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Dữ kiện: Milestone A mất 105 phút (dự kiến 60 phút). Kế hoạch hiện tại sẽ thiếu 1,5 giờ nếu giữ nguyên nhịp học cũ.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('recover')}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shrink-0 shadow-sm"
                >
                  Xem phương án phục hồi
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 2: S2–S4 — LẬP KẾ HOẠCH TUẦN (PLAN)               */}
          {/* ==================================================== */}
          {activeTab === 'plan' && role === 'student' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">Lập kế hoạch tuần (Plan)</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    AI tự động phân rã các yêu cầu thành nhiệm vụ nhỏ dựa trên deadline và quỹ thời gian bạn khai báo.
                  </p>
                </div>
                {planSaved ? (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Kế hoạch đã được lưu</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Bản xem trước — chưa lưu</span>
                  </div>
                )}
              </div>

              {/* Milestones Card Table */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 bg-slate-800/60 border-b border-slate-700/60 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                  <span>Tổng thời lượng: <strong>4,5 giờ / 6,0 giờ rảnh</strong></span>
                  <span>Không phát hiện xung đột lịch</span>
                  <span className="text-indigo-400">Dữ liệu nguồn: Assignment 2 Canvas</span>
                </div>

                <div className="divide-y divide-slate-800">
                  {plan.milestones.map((item, idx) => (
                    <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors">
                      <div className="flex items-start gap-3.5">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-100 text-sm">{item.title}</h4>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-indigo-400" />
                              Thời lượng: {item.durationMinutes} phút
                            </span>
                            <span>•</span>
                            <span className="text-slate-300">Hạn: {item.deadline}</span>
                            <span>•</span>
                            <span className="text-slate-400">{item.notes}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          {item.source}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-slate-800/40 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <strong>Giả định AI:</strong> {plan.assumptions.join(' • ')}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => alert('Chế độ chỉnh sửa thông số rảnh')}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700"
                    >
                      Sửa tham số
                    </button>
                    <button
                      onClick={() => {
                        setPlanSaved(true);
                        alert('Đã xác nhận và ghi nhận kế hoạch tuần vào hệ thống!');
                      }}
                      disabled={planSaved}
                      className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-600/20"
                    >
                      {planSaved ? 'Đã lưu kế hoạch' : 'Xác nhận và lưu'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 3: S5–S7 — THEO DÕI & PHỤC HỒI (RECOVER)         */}
          {/* ==================================================== */}
          {activeTab === 'recover' && role === 'student' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">Phục hồi kế hoạch (Recover)</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Cân đối lại thời gian khi tiến độ thực tế bị chậm hơn so với dự kiến.
                  </p>
                </div>
              </div>

              {/* Warning Alert Banner */}
              <div className="bg-amber-950/40 border-2 border-amber-500/40 rounded-2xl p-5 shadow-lg">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-amber-200">
                      Cảnh báo sai lệch tiến độ: Milestone A
                    </h3>
                    <div className="text-xs text-slate-300 mt-2 space-y-1">
                      <p>• <strong>Dự kiến:</strong> 60 phút | <strong>Thực tế bạn ghi nhận:</strong> 105 phút (chậm 45 phút).</p>
                      <p>• <strong>Ảnh hưởng:</strong> Assignment 2 còn 1 ngày 8 giờ, quỹ dự phòng (slack) chỉ còn 20 phút.</p>
                      <p>• <strong>Nguy cơ:</strong> Không kịp nộp bài nếu giữ nguyên thời lượng các buổi học còn lại.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recovery Options List */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Chọn 1 phương án phục hồi khả thi (Đánh đổi rõ ràng):
                </h4>

                {mockRiskAlert.options.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => opt.isFeasible && setSelectedOption(opt.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      opt.id === selectedOption
                        ? 'bg-indigo-950/40 border-indigo-500/80 shadow-lg shadow-indigo-500/10'
                        : opt.isFeasible
                        ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                        : 'bg-slate-900/40 border-slate-800/40 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-white text-sm">{opt.title}</h5>
                          {!opt.isFeasible && (
                            <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-bold">
                              Vô nghiệm
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 mt-1">{opt.description}</p>
                        <p className="text-xs text-amber-300/90 mt-2 font-medium">
                          <strong>Đánh đổi:</strong> {opt.tradeoff}
                        </p>
                      </div>

                      <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                        {selectedOption === opt.id && <div className="w-3 h-3 rounded-full bg-indigo-500" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Confirmation Action */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  {recoverSaved ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Đã cập nhật lịch mới vào cơ sở dữ liệu!
                    </span>
                  ) : (
                    <span>Mọi phương án chỉ thay đổi sau khi bạn xác nhận.</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700"
                  >
                    Giữ kế hoạch hiện tại
                  </button>
                  <button
                    onClick={() => {
                      setRecoverSaved(true);
                      alert('Đã cập nhật lịch học mới thành công!');
                    }}
                    className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-md shadow-amber-600/20"
                  >
                    Xác nhận cập nhật
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 4: S8–S9 — HỎI ĐÁP CÓ NGUỒN (Q&A & GUARDRAIL)   */}
          {/* ==================================================== */}
          {activeTab === 'chat' && role === 'student' && (
            <div className="space-y-4 animate-fade-in flex flex-col h-[700px]">
              <div>
                <h2 className="text-2xl font-bold text-white">Hỏi đáp tài liệu môn học</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Trợ lý AI trả lời có trích dẫn nguồn cụ thể. Không làm bài hộ, hỗ trợ gợi ý tư duy phương pháp giải.
                </p>
              </div>

              {/* Chat Viewport */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-sm ${
                        msg.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none'
                          : msg.isBlockedByGuardrail
                          ? 'bg-rose-950/40 border border-rose-500/40 text-slate-200 rounded-bl-none'
                          : 'bg-slate-800/80 border border-slate-700/60 text-slate-200 rounded-bl-none'
                      }`}
                    >
                      {msg.isBlockedByGuardrail && (
                        <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                          <ShieldAlert className="w-4 h-4" />
                          <span>Rào chắn liêm chính học thuật</span>
                        </div>
                      )}

                      <p className="leading-relaxed">{msg.content}</p>

                      {msg.socraticHint && (
                        <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs text-indigo-300">
                          <strong>Gợi ý từ PaceWise:</strong> {msg.socraticHint}
                        </div>
                      )}

                      {/* Citations Chips */}
                      {msg.citations && msg.citations.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-700/50 flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-semibold text-slate-400">Tài liệu trích dẫn:</span>
                          {msg.citations.map((c) => (
                            <button
                              key={c.id}
                              onClick={() => setSelectedCitation(c)}
                              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border border-indigo-500/30 transition-colors"
                            >
                              <span>[{c.id}] {c.title}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}
              </div>

              {/* Demo Shortcut buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">Câu hỏi thử nghiệm:</span>
                <button
                  onClick={() => handleSendMessage('Đồng thuận Byzantine yêu cầu bao nhiêu node để chịu lỗi?')}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                >
                  Hỏi khái niệm lý thuyết (Có nguồn)
                </button>
                <button
                  onClick={() => handleSendMessage('Hãy làm hộ tôi toàn bộ mã nguồn bài tập Assignment 2 để nộp')}
                  className="text-xs px-2.5 py-1 rounded-lg bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 border border-rose-500/30 flex items-center gap-1"
                >
                  <ShieldAlert className="w-3 h-3" />
                  Thử nhờ làm bài hộ (Test Guardrail)
                </button>
              </div>

              {/* Chat Input Bar */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputQuestion}
                  onChange={(e) => setInputQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Nhập câu hỏi về tài liệu môn học..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-md shadow-indigo-600/20"
                >
                  <span>Gửi</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 5: S10–S11 — KIỂM TRA HIỂU BÀI (CHECK)            */}
          {/* ==================================================== */}
          {activeTab === 'check' && role === 'student' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-white">Kiểm tra nhanh mức độ hiểu bài</h2>
                <p className="text-sm text-slate-400 mt-1">
                  1–3 câu hỏi thu thập bằng chứng hiểu bài. <strong>Kết quả không phải điểm số chính thức</strong>.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                    {mockQuizQuestions[0].unit}
                  </span>
                  <span className="text-xs text-slate-400">Câu hỏi 1/2</span>
                </div>

                <h3 className="text-base font-semibold text-white leading-relaxed">
                  {mockQuizQuestions[0].prompt}
                </h3>

                <textarea
                  value={quizAnswer}
                  onChange={(e) => setQuizAnswer(e.target.value)}
                  rows={4}
                  placeholder="Nhập phần giải thích tóm tắt của bạn theo các khái niệm đã học..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400">Hệ thống phân tích dựa trên rubric giảng viên đã duyệt</span>
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-600/20"
                  >
                    Nộp câu trả lời
                  </button>
                </div>
              </div>

              {/* Assessment Result Panel */}
              {quizSubmitted && (
                <div className="bg-slate-900/90 border border-indigo-500/40 rounded-2xl p-6 shadow-xl space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase">Trạng thái bằng chứng:</span>
                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                        Đang hình thành
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">Độ tin cậy: <strong>Trung bình</strong></span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-2">
                    <p><strong>Bằng chứng ghi nhận:</strong> Bạn đã nêu đúng khái niệm số node chịu lỗi f, nhưng còn thiếu bước lập luận về trường hợp tin nhắn mâu thuẫn giữa 2 phân vùng.</p>
                    <p className="text-amber-400"><strong>Lưu ý:</strong> Đây là công cụ tự đánh giá, không phải điểm kiểm tra chính thức.</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-indigo-300">
                      <strong>Gợi ý tiếp theo:</strong> Đọc lại Lecture 04 mục §2, sau đó thử lại câu tương tự.
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert('Đã gửi kết quả vào hàng chờ giảng viên để nhận góp ý!')}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700"
                      >
                        Gửi giảng viên xem
                      </button>
                      <button
                        onClick={() => setActiveTab('overview')}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                      >
                        Thêm vào kế hoạch tuần
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 6: S12 — PHẢN TƯ CUỐI TUẦN (REFLECT)             */}
          {/* ==================================================== */}
          {activeTab === 'reflect' && role === 'student' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-white">Phản tư cuối tuần (Reflect)</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Nhìn lại dữ kiện tuần học để rút kinh nghiệm và điều chỉnh hệ số ước lượng cho tuần sau.
                </p>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Kế hoạch dự kiến</span>
                  <p className="text-2xl font-bold text-white mt-1">6,0 giờ</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Thực tế học tập</span>
                  <p className="text-2xl font-bold text-amber-400 mt-1">7,5 giờ</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Số lần phục hồi lịch</span>
                  <p className="text-2xl font-bold text-indigo-400 mt-1">1 lần</p>
                </div>
              </div>

              {/* Reflection Form */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    1. Điều gì đã mang lại hiệu quả tốt trong tuần này?
                  </label>
                  <input
                    type="text"
                    value={reflectGood}
                    onChange={(e) => setReflectGood(e.target.value)}
                    placeholder="Ví dụ: Ôn trước lý thuyết giúp làm bài tập Assignment nhanh hơn..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    2. Điều gì đã gây ra sai lệch so với kế hoạch ban đầu?
                  </label>
                  <input
                    type="text"
                    value={reflectBad}
                    onChange={(e) => setReflectBad(e.target.value)}
                    placeholder="Ví dụ: Đánh giá thấp độ khó của phần phân tích lỗi Byzantine..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    3. Tuần sau bạn muốn điều chỉnh điều gì?
                  </label>
                  <input
                    type="text"
                    value={reflectNext}
                    onChange={(e) => setReflectNext(e.target.value)}
                    placeholder="Ví dụ: Tăng ước lượng thời lượng đọc tài liệu thêm 20%..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200"
                  />
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      setReflectSaved(true);
                      alert('Đã lưu bản phản tư cá nhân!');
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700"
                  >
                    Chỉ lưu phản tư
                  </button>
                  <button
                    onClick={() => {
                      setReflectSaved(true);
                      alert('Đã lưu phản tư và áp dụng tăng 20% hệ số ước lượng cho Plan tuần tới!');
                    }}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20"
                  >
                    Dùng cho tuần sau
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* TAB 7: I1–I2 — MANAGEMENT CONSOLE (GIẢNG VIÊN)        */}
          {/* ==================================================== */}
          {activeTab === 'instructor' && role === 'instructor' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Môn pilot: Hệ phân tán · Tuần 3</span>
                  <h2 className="text-2xl font-bold text-white mt-1">Bảng điều khiển Giảng viên (Console)</h2>
                </div>
                <div className="flex items-center gap-2 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-xl font-medium">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Ẩn danh: n = 38 (≥ 5 bảo đảm riêng tư)</span>
                </div>
              </div>

              {/* Class KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Sĩ số môn học</span>
                  <p className="text-2xl font-bold text-white mt-1">{mockClassOverview.totalStudents} sinh viên</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Đúng hạn dự kiến</span>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">{mockClassOverview.onTrackRate}%</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Tín hiệu có nguy cơ</span>
                  <p className="text-2xl font-bold text-amber-400 mt-1">{mockClassOverview.atRiskCount} ca</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400">Hàng chờ cần duyệt</span>
                  <p className="text-2xl font-bold text-indigo-400 mt-1">{mockClassOverview.needsReviewCount} ca</p>
                </div>
              </div>

              {/* Review Queue */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white">Hàng chờ duyệt (Dành cho Giảng viên)</h3>
                <p className="text-xs text-slate-400">
                  Duyệt các câu hỏi mới hoặc can thiệp các trường hợp AI đánh giá độ tin cậy thấp.
                </p>

                <div className="divide-y divide-slate-800 border-t border-slate-800">
                  <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">Câu hỏi kiểm tra nhanh: Đơn vị kiến thức A</h4>
                      <p className="text-xs text-slate-400 mt-1">AI sinh tự động dựa trên Lecture 04 — Chờ giảng viên phê duyệt rubric.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs">
                        Duyệt xuất bản
                      </button>
                      <button className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700">
                        Sửa rubric
                      </button>
                    </div>
                  </div>

                  <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">Yêu cầu xem xét: Sinh viên ẩn danh #08</h4>
                      <p className="text-xs text-slate-400 mt-1">Đánh giá độ tin cậy thấp ở phần giải thích lỗi mạng phân vùng.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs">
                        Xem bài làm
                      </button>
                      <button className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700">
                        Gửi ghi chú hỗ trợ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 3. MODAL XEM TRÍCH ĐOẠN NGUỒN TÀI LIỆU (CITATION VIEWER) */}
      {selectedCitation && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-scale-up space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Trích đoạn nguồn tài liệu [{selectedCitation.id}]</span>
              </div>
              <button
                onClick={() => setSelectedCitation(null)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div>
              <h4 className="text-base font-bold text-white">{selectedCitation.title}</h4>
              <span className="text-xs text-indigo-300 font-medium">{selectedCitation.sourceSection}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
              "{selectedCitation.content}"
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  alert('Đã ghi nhận báo cáo trích dẫn không chính xác vào hệ thống để review!');
                  setSelectedCitation(null);
                }}
                className="text-xs text-rose-400 hover:underline"
              >
                Báo nguồn sai
              </button>
              <button
                onClick={() => setSelectedCitation(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
