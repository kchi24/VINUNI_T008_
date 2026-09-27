import { WeeklyPlan, RiskAlert, QuizQuestion, ClassRiskOverview } from '@/types';

export const mockWeeklyPlan: WeeklyPlan = {
  id: 'plan-w3',
  weekNumber: 3,
  title: 'Tuần 3: Ôn tập & Bài tập Assignment 2',
  startDate: '23/09/2026',
  endDate: '29/09/2026',
  availableHours: 6.0,
  allocatedHours: 4.5,
  isConfirmed: false,
  assumptions: [
    'Thời lượng hoàn thành Assignment 2 ước tính 3 giờ',
    'Ôn tập đơn vị kiến thức B trước khi làm milestone A',
  ],
  milestones: [
    {
      id: 'm1',
      title: 'Milestone A: Phân tích yêu cầu đề bài Assignment 2',
      durationMinutes: 60,
      actualMinutes: 105,
      deadline: 'Thứ 2 18:00',
      source: 'Assignment 2 (Canvas)',
      status: 'delayed',
      order: 1,
      notes: 'Cần trước milestone B, hạn trong 2 ngày',
    },
    {
      id: 'm2',
      title: 'Ôn tập đơn vị kiến thức B (Cấu trúc dữ liệu nâng cao)',
      durationMinutes: 45,
      deadline: 'Thứ 4 19:00',
      source: 'Lecture 04 §2',
      status: 'pending',
      order: 2,
      notes: 'Bổ trợ cho phần lập luận bài tập',
    },
    {
      id: 'm3',
      title: 'Hoàn thiện & Kiểm thử mã nguồn',
      durationMinutes: 90,
      deadline: 'Thứ 6 09:00',
      source: 'Rubric tiêu chí chấm',
      status: 'pending',
      order: 3,
      notes: 'Chạy test case mẫu',
    },
  ],
};

export const mockRiskAlert: RiskAlert = {
  id: 'risk-1',
  milestoneTitle: 'Milestone A: Phân tích yêu cầu đề bài Assignment 2',
  plannedMinutes: 60,
  actualMinutes: 105,
  slackRemainingMinutes: 20,
  deadlineNote: 'Assignment 2 còn 1 ngày 8 giờ; slack còn 20 phút',
  severity: 'warning',
  options: [
    {
      id: 'opt-a',
      title: 'Phương án A: Dời buổi ôn tập đơn vị C, ưu tiên giữ Assignment 2',
      description: 'Chuyển thời lượng ôn tập đơn vị C sang tuần sau để kịp hạn nộp bài tập chính.',
      tradeoff: 'Đảm bảo nộp đúng hạn, nhưng sẽ cần bù giờ ôn tập trước kỳ kiểm tra giữa kỳ.',
      isFeasible: true,
    },
    {
      id: 'opt-b',
      title: 'Phương án B: Chia phiên học tối nay thêm 45 phút, vẫn giữ lịch ôn C',
      description: 'Học bù thêm 45 phút vào tối Thứ 4 để giữ nguyên toàn bộ lộ trình đã cam kết.',
      tradeoff: 'Giữ được khối lượng kiến thức đầy đủ, nhưng tăng tải học tập trong ngày Thứ 4.',
      isFeasible: true,
    },
    {
      id: 'opt-c',
      title: 'Phương án C: Lịch học hiện tại đã vô nghiệm — Đề xuất trao đổi với giảng viên',
      description: 'Quỹ thời gian rảnh không còn đủ bù đắp độ lệch. Khuyến nghị gửi email xin gia hạn hoặc tư vấn hỗ trợ.',
      tradeoff: 'Cần sự đồng thuận từ phía giảng viên phụ trách môn học.',
      isFeasible: false,
    },
  ],
};

export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    unit: 'Đơn vị kiến thức A: Thiết kế thuật toán phân tán',
    prompt: 'Giải thích vì sao cơ chế Đồng thuận (Consensus) cần tối thiểu 2f + 1 node để chịu lỗi f node Byzantine?',
    type: 'open',
  },
  {
    id: 'q2',
    unit: 'Đơn vị kiến thức B: Tính nhất quán dữ liệu',
    prompt: 'Trong định lý CAP, khi xảy ra phân vùng mạng (Partition), hệ thống buộc phải đánh đổi giữa những yếu tố nào?',
    type: 'multiple_choice',
    options: [
      'Nhất quán (Consistency) và Sẵn sàng (Availability)',
      'Bảo mật (Security) và Tốc độ (Speed)',
      'Độ trễ (Latency) và Băng thông (Bandwidth)',
      'Dung lượng (Storage) và Khả năng chịu lỗi (Fault tolerance)',
    ],
  },
];

export const mockClassOverview: ClassRiskOverview = {
  totalStudents: 38,
  onTrackRate: 78,
  atRiskCount: 12,
  needsReviewCount: 4,
  privacyProtected: true, // >= 5 students
};
