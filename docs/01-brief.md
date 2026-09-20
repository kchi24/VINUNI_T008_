# PROJECT BRIEF: Trợ Lý Học Tập Cá Nhân AI (Plan-Do-Reflect Learning Companion)
**Mã đề tài:** EDU-01 | **Nhóm:** VinUni_T008  
**Tên dự án đề xuất:** **Study Companion (X-Tutor)**

---

## 1. Bối cảnh, Thực trạng & Lập luận Căn nguyên (Context, Reality & Root-Cause Analysis)

### 1.1 Bối cảnh thực nghiệm: Mô hình đào tạo hiện đại & Nền tảng Canvas LMS
Tại các cơ sở giáo dục đại học tiên tiến định hướng quốc tế, phương pháp giảng dạy chuyển dịch mạnh mẽ sang **Học tập chủ động (Active Learning)**, **Học tập dựa trên nhóm (Team-Based Learning - TBL)** và **Học tập dựa trên dự án (Project-Based Learning - PBL)**. 
- Trong mô hình này, **hơn 65% thời lượng học tập thực tế diễn ra ngoài giảng đường** thông qua tự học độc lập: đọc tài liệu chuyên sâu (pre-readings), giải quyết bài tập lớn (course projects), làm thí nghiệm (labs) và chuẩn bị thảo luận. 
*(Cơ sở tính toán: theo định nghĩa tín chỉ liên bang Hoa Kỳ — 1 tín chỉ tương đương tối thiểu 1 giờ lên lớp + 2 giờ tự học/tuần trong 15 tuần [1] — và VinUni vận hành theo hệ thống tín chỉ cùng chuẩn [2], nên với SV học 15–18 tín chỉ/kỳ, tỷ lệ giờ tự học tối thiểu theo quy định đã chiếm ≈ 66–67% tổng thời lượng học tập.)*
- Toàn bộ dòng chảy học liệu, đề bài và đánh giá được điều phối qua hệ sinh thái **Canvas LMS**.

---

### 1.2 Thực trạng & 5 Nghịch lý trong chu trình học tập thực tế của sinh viên

Dù có hạ tầng số hiện đại từ Canvas LMS, quá trình tự học của sinh viên đang đối mặt với chuỗi nghịch lý mang tính hệ thống:

```
[Hạn chế Canvas: Chỉ có Due Date tĩnh]
                 │
                 ▼
[Lập kế hoạch thiếu thực tế (Planning Fallacy) -> Trì hoãn]
                 │
                 ▼
[Vòng lặp "Chạy theo bài" & Làm bài đối phó (Cramming 21h-23h59)]
                 │
                 ▼
[Áp lực deadline đêm muộn-> Bế tắc -> Lạm dụng GenAI giải hộ]
                 │
                 ▼
[Thiếu vòng lặp cải thiện: Nộp xong bỏ quên feedback -> Lặp lại sai lầm]
```

#### Nghịch lý 1: Hạn chế Canvas LMS: Chỉ có Due Date tĩnh 
- **Thực tế:** Canvas LMS hoạt động theo bản chất là **Kho lưu trữ nội dung và Điểm kiểm soát hành chính (Passive Repository & Administrative Checkpoint)**, hoàn toàn thiếu cơ chế **Hỗ trợ học tập theo từng bước**.
- **Lập luận nhân - quả:** Tính năng Calendar và To-Do List của Canvas chỉ hiển thị danh sách hạn nộp theo thứ tự thời gian tuyến tính (`Final Due Date`: ví dụ *23:59 Chủ Nhật*). Canvas cào bằng về mặt thị giác giữa một bài trắc nghiệm nhanh 15 phút với một đồ án kỹ thuật đòi hỏi 25 giờ nghiên cứu. Do hệ thống không hỗ trợ **Ước lượng khối lượng công việc (Workload Estimation)**, sinh viên bị đánh lừa bởi cảm giác "deadline còn xa", dẫn đến mất kiểm soát thời gian bắt đầu.

#### Nghịch lý 2: Lập kế hoạch thiếu thực tế (Planning Fallacy) -> Trì hoãn
- **Thực tế:** Sinh viên học đồng thời 4–6 môn (15–18 tín chỉ/học kỳ). Mỗi môn đều có các mốc kiểm tra dồn dập vào giữa kỳ và cuối kỳ.
- **Lập luận nhân - quả:** Vì thiếu năng lực phân rã nhiệm vụ (Work Breakdown Structure - WBS), sinh viên thường đánh giá thấp thời gian cần thiết để hoàn thành bài tập phức tạp. Khi thời hạn đến gần, sinh viên rơi vào chế độ "chữa cháy": dồn toàn lực làm môn A để kịp nộp trong đêm -> bỏ bê môn B -> hôm sau lại thức trắng làm môn B. Hiện tượng "cramming" tập trung cao độ vào khung giờ **21:00 – 23:59 sát giờ đóng cổng Canvas** làm sụt giảm chất lượng bài nộp, gây kiệt sức tinh thần (burnout) và gia tăng tỷ lệ nộp trễ hạn (late submission).

#### Nghịch lý 3: Vòng lặp "Chạy theo bài" & Làm bài đối phó (Cramming 21h-23h59)
- **Thực tế:** Theo lý thuyết học tập tự điều chỉnh của Barry Zimmerman (Self-Regulated Learning), một người học trưởng thành phải trải qua 3 pha tuần hoàn: **Lập kế hoạch (Forethought) -> Thực thi (Performance) -> Tự phản tư (Self-Reflection)**.

![Zimmerman's Self-Regulated Learning Cycle](./images/srl_cycle_zimmerman.png)

- **Lập luận nhân - quả:** Hiện tại, sinh viên chỉ hoạt động ở pha Thực thi (Do) một cách bị động. Khi bài tập được giảng viên/TA chấm và trả nhận xét chi tiết qua Canvas SpeedGrader, sinh viên **chỉ nhìn vào điểm số và lập tức đóng tab**. Feedback của giảng viên bị bỏ quên sau khi sinh viên nộp bài do chưa có một bước đối thoại có cấu trúc để buộc sinh viên chủ động nhìn lại quá trình học tập: Tuần qua mình gặp khó khăn ở đâu? Nguyên nhân khiến mình mất nhiều thời gian ở phần này là gì? Kế hoạch học tập cho tuần tới cần được điều chỉnh như thế nào? Không có phản tư (Reflect), các thói quen xấu và lỗi tư duy sẽ tiếp tục lặp lại ở bài tập tiếp theo.

#### Nghịch lý 4: Áp lực deadline đêm muộn-> Bế tắc -> Lạm dụng GenAI giải hộ
- **Thực tế:** Quá trình tự học và làm bài tập diễn ra chủ yếu vào ban đêm hoặc các ngày cuối tuần – thời điểm Giảng viên và Trợ giảng (TA) không khả dụng ngoài giờ hành chính (Office Hours).
- **Lập luận nhân - quả:** Khi sinh viên gặp bế tắc logic trong thuật toán hoặc không hiểu rõ yêu cầu rubric vào lúc 23:00, sự thiếu vắng người hướng dẫn tức thời cộng hưởng với nỗi sợ bị điểm 0 tạo ra phản ứng hoảng loạn. Sinh viên tìm đến các công cụ GenAI công cộng (ChatGPT, Claude) như một "phao cứu sinh", thực hiện hành vi copy-paste toàn bộ đề bài và yêu cầu **"viết code giải hoàn chỉnh / viết hộ bài luận"**. Đây không đơn thuần là vấn đề ý thức đạo đức, mà là hệ quả trực tiếp của việc **thiếu một cơ chế đồng hành sư phạm 24/7 có ranh giới bảo vệ**.

#### Nghịch lý 5: [Thiếu vòng lặp cải thiện: Nộp xong bỏ quên feedback -> Lặp lại sai lầm]
- **Thực tế:** Bảng Canvas Course Analytics hiện tại chỉ cung cấp các chỉ số trễ (Lagging Indicators): lượt click trang, điểm trung bình, trạng thái đã nộp / chưa nộp.
- **Lập luận nhân - quả:** Giảng viên khó nắm về tiến độ thực chất giữa hai mốc deadline (khoảng trống 1–2 tuần). Giảng viên không biết bao nhiêu % lớp đang bế tắc ở khái niệm nào để chủ động ôn tập trên giảng đường, và chỉ biết một sinh viên bị bỏ lại phía sau khi bài tập đã quá hạn nộp.

---

### 1.3 Vấn đề cốt lõi & Luận điểm giải pháp (Core Problem & Proposed Intervention)

Từ chuỗi lập luận trên, vấn đề cốt lõi không nằm ở việc thiếu tài liệu hay thông báo deadline, mà ở việc sinh viên thiếu một người đồng hành hỗ trợ họ xuyên suốt quá trình học — từ lập kế hoạch, thực hiện, phản tư đến điều chỉnh kế hoạch.

Dự án **Study Companion (X-Tutor)** được thiết kế như một **Hệ thống tác nhân đa trí tuệ (Multi-Agent System)** tích hợp trực tiếp vào Canvas LMS nhằm khép kín chu trình học tập:
1. **Module 1 - PLAN (Chuyển hóa Deadline tĩnh thành Lộ trình động):** Tự động đọc Syllabus, Assignment Prompt và Rubric từ Canvas -> Ước tính khối lượng công việc -> Phân rã bài tập lớn thành chuỗi micro-tasks khả thi với hạn chót từng chặng (Milestones).
**VD:** Sinh viên có Assignment “Phân tích dữ liệu bán hàng”, deadline 30/9. AI đọc yêu cầu bài, rubric và tài liệu môn học → nhận diện các phần cần làm → chia thành các task nhỏ: 25/9: hiểu yêu cầu → 26/9: làm sạch dữ liệu → 27/9: phân tích → 28/9: trực quan hóa → 29/9: viết báo cáo → 30/9: kiểm tra & nộp bài.
2. **Module 2 - DO (Đồng hành học thuật có ranh giới Socratic & Grounded RAG):** 
   - Giải đáp câu hỏi dựa trên tài liệu môn học: AI tìm kiếm thông tin trong Syllabus, Slides, Textbooks và các tài liệu được giảng viên cung cấp, sau đó trả lời và chỉ rõ nguồn tham khảo (trang/slide) để sinh viên có thể kiểm tra lại.
   - **Đảm bảo tính trung thực trong học tập bằng Guardrails (NeMo Guardrails / Llama Guard):** AI trả lời dựa trên tài liệu chính thống của môn học và cung cấp nguồn tham khảo rõ ràng. Với bài tập được tính điểm, Guardrails ngăn AI làm bài thay sinh viên; thay vào đó, AI đặt câu hỏi và đưa ra gợi ý từng bước để sinh viên tự tìm ra lời giải.
   **VD:** Sinh viên: “Hãy phân tích dataset này và viết luôn phần kết quả cho em.”
   AI không cung cấp bài làm hoàn chỉnh. Thay vào đó, AI hỏi: “Em đang muốn tìm xu hướng nào trong dữ liệu? Hãy thử xác định biến mục tiêu và nhóm biến giải thích trước.”
3. **Module 3 - REFLECT (Kích hoạt Siêu nhận thức & Hỗ trợ Giảng viên can thiệp sớm):**
   - AI khởi động phiên phản tư ngắn (3–5 phút) vào cuối tuần hoặc sau mỗi bài nộp, giúp sinh viên nhìn lại tiến độ, khó khăn và nguyên nhân. LLM-as-a-Judge được sử dụng để đánh giá mức độ đầy đủ và chiều sâu của phản tư. Kết quả được lưu vào Learning Memory để AI điều chỉnh kế hoạch và cách hỗ trợ cho giai đoạn học tiếp theo.
   - Tổng hợp dữ liệu học tập thành **Bản đồ nhiệt khó khăn (Concept Confusion Heatmap)** và **Cảnh báo nguy cơ trễ hạn (At-risk Alerts)** ẩn danh theo chuẩn FERPA, giúp giảng viên nắm bắt "nhịp thở" của lớp học giữa chặng.

   **VD:** Sau khi nộp Assignment, AI mở một phiên phản tư khoảng 3–5 phút:
   AI: “Phần nào của bài khiến em gặp khó khăn nhất?”
   Sinh viên: “Em mất nhiều thời gian làm sạch dữ liệu.”
   AI: “Nguyên nhân chính là thiếu kiến thức hay gặp khó khăn khi áp dụng?”
   Sinh viên: “Em chưa biết xử lý missing values.”
   AI: “Vậy ở tuần sau, em có muốn dành thêm thời gian ôn lại phần này không?”

   AI ghi nhận: Khó khăn: Missing values
   → Nguyên nhân: Chưa nắm vững kiến thức
   → Hành động tiếp theo: Ôn lại Data Cleaning

   Thông tin này có thể được sử dụng khi AI re-plan kế hoạch học tập tiếp theo.

   Đồng thời, ở cấp độ lớp học, nếu nhiều sinh viên gặp khó khăn tương tự, hệ thống có thể tổng hợp thành:

   Concept Confusion Heatmap: Data Cleaning → nhiều sinh viên gặp khó khăn
   At-risk Alert: Một số sinh viên liên tục trễ các milestone hoặc chưa hoàn thành nhiệm vụ

   → Giảng viên có thể nhận biết vấn đề trước khi đến cuối kỳ thay vì chỉ phát hiện khi điểm bài tập thấp.

---

## 2. Mục tiêu dự án (Project Objectives) & KPI

### 2.1 Mục tiêu định lượng (Quantitative KPIs)
- **Tăng tỷ lệ nộp bài đúng hạn (On-time Submission Rate):** Cải thiện ít nhất **15% – 25%** so với trước khi dùng hệ thống.
- **Mức độ gắn kết (Engagement Rate):** Ít nhất **70%** sinh viên hoàn thành phiên phản tư cuối tuần (Weekly Reflection Session).
- **Độ chính xác và độ tin cậy của AI (RAG Groundedness):** Đạt điểm Faithfulness & Answer Relevance >=0.85 trên thang đo RAGAS.
- **Khả năng mở rộng & Chi phí (Scalability & Cost):** Hệ thống có thể hỗ trợ khoảng 1.000 sinh viên sử dụng cùng lúc, với thời gian phản hồi nhanh (95% yêu cầu được phản hồi trong vòng 2,5 giây). Chi phí sử dụng AI được giảm bằng cách lựa chọn mô hình phù hợp cho từng câu hỏi và lưu lại kết quả của các câu hỏi tương tự.

### 2.2 Mục tiêu định tính (Qualitative Goals)
- Giúp sinh viên hình thành thói quen tự nhìn lại quá trình học tập, nhận biết khó khăn và chủ động điều chỉnh cách học.
- Giúp giảng viên và cố vấn học tập có cái nhìn tổng quan về tình hình học tập của lớp, phát hiện sớm những vấn đề cần hỗ trợ, đồng thời bảo vệ quyền riêng tư của từng sinh viên.

---

## 3. Ràng buộc & Giới hạn cốt lõi (Constraints & Boundaries)

| Ràng buộc | Chi tiết cam kết kỹ thuật |
| :--- | :--- |
| **Không làm bài thay (Academic Integrity)** | **Tuyệt đối KHÔNG giải hộ bài tập tính điểm.** Khi sinh viên paste đề thi/assignment và yêu cầu "hãy làm hộ", AI Guardrails (NeMo Guardrails / Llama Guard) sẽ chặn lại, với bài tập được tính điểm, AI không đưa ra lời giải hoàn chỉnh mà chuyển sang hướng dẫn từng bước, gợi ý cách làm và đặt câu hỏi để sinh viên tự giải quyết.
| **Bảo mật & Quyền riêng tư (FERPA Mindset)** | Mọi dữ liệu cá nhân (PII), điểm số, tiến độ của sinh viên khi tổng hợp hiển thị lên Dashboard giảng viên **đều phải được ẩn danh hóa (Anonymized)**. Giảng viên chỉ thấy xu hướng tổng quan và nhóm rủi ro (Risk Segment) mà không bị lộ danh tính cá nhân trái phép. |
| **Chống ảo giác (Anti-Hallucination)** | Câu trả lời của AI liên quan đến kiến thức môn học phải **bắt buộc Grounded trên Syllabus, Slides, Textbooks** của môn học với citation nguồn cụ thể (tên tài liệu, trang, slide số). |
| **Human-In-The-Loop (HITL)** | Giảng viên có quyền kiểm soát tài liệu tải lên Vector DB, điều chỉnh tiêu chuẩn rubric, và can thiệp hỗ trợ các trường hợp AI phát hiện cảnh báo nguy cơ trễ hạn (At-risk alerts). |

---

## 4. Chân dung người dùng (User Personas)

1. **Sinh viên (Primary User - Khoa Kỹ thuật / Kinh doanh):**
   - *Nhu cầu:* Cần một công cụ giúp quản lý nhiều môn học, bài tập và deadline, tránh bị quá tải hoặc bỏ sót công việc. Đồng thời, sinh viên có thể hỏi và hiểu nhanh những nội dung khó, cũng như biết mình đang học như thế nào và cần cải thiện ở đâu.
   - *Cách sử dụng:* Sử dụng web app trên máy tính hoặc điện thoại trong quá trình học, kết nối với nền tảng học tập để cập nhật môn học, bài tập và thời hạn.
2. **Giảng viên & Trợ giảng (Secondary User - Instructors/TAs):**
   - *Nhu cầu:* Có cái nhìn tổng quan về tiến độ và những khó khăn phổ biến của sinh viên, chẳng hạn có bao nhiêu sinh viên đang gặp khó khăn ở một nội dung, tỷ lệ hoàn thành kế hoạch học tập và những trường hợp có dấu hiệu chậm tiến độ cần được hỗ trợ.
   - *Cách sử dụng:* Truy cập Dashboard định kỳ, chẳng hạn trước mỗi buổi học, để xem tình hình của lớp và xác định những nội dung hoặc nhóm sinh viên cần được hỗ trợ.

---

## 5. Cột mốc phát triển (Roadmap Overview)

- **Giai đoạn 1 (MVP Cơ bản - Tuần 1-2):** Web app Next.js + FastAPI, tích hợp Canvas Mock/REST API, tính năng phân rã nhiệm vụ Plan, RAG trên 1 môn học mẫu, chatbot Socratic có Guardrails cơ bản, Dashboard thống kê ẩn danh cho giảng viên.
- **Giai đoạn 2 (Nâng cao & Đánh giá - Tuần 3-4):** LangGraph Multi-Agent với bộ nhớ dài hạn (PostgreSQL + pgvector), tích hợp Canvas LTI 1.3, Reranker Cohere/BGE, Redis Caching, Pipeline kiểm định RAGAS và Load testing cho 1.000 users đồng thời.
