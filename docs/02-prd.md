# PRD — X-Tutor

**Mã đề:** EDU-01 | **Đội:** P-008 | **Trạng thái:** Draft cho Gate 01 | **Cập nhật:** 20/09/2026

> PRD này mô tả phạm vi sản phẩm mục tiêu và phải được cập nhật cùng PR khi code hoặc quyết định kỹ thuật thay đổi. Trạng thái triển khai thực tế được ghi tại Mục 8; tính năng chưa có trong code không được xem là đã hoàn thành.

## 1. Bối cảnh & Mục tiêu

Sinh viên đại học phải theo dõi nhiều môn và deadline cùng lúc, nhưng thường khó biết nên bắt đầu từ đâu, chia bài tập lớn như thế nào và ưu tiên công việc nào trong tuần. Hiện tại, họ tự ghép thông tin từ Canvas, lịch cá nhân, ghi chú và chatbot rời rạc; vì vậy dễ bắt đầu muộn, chạy theo deadline và lặp lại cách học chưa hiệu quả.

Giảng viên thường chỉ nhận ra sinh viên gặp khó khăn sau khi bài bị nộp muộn hoặc kết quả giảm. X-Tutor hướng tới tạo một vòng lặp **Plan–Do–Reflect** giúp sinh viên lập kế hoạch, nhận hỗ trợ có căn cứ khi thực hiện và điều chỉnh cách học cho tuần tiếp theo; đồng thời cung cấp cho giảng viên tín hiệu tổng hợp để hỗ trợ đúng lúc.

### Mục tiêu MVP

1. Giúp sinh viên tổng hợp nhiệm vụ từ nhiều môn và xác nhận một kế hoạch tuần khả thi.
2. Hỗ trợ hỏi đáp trên tài liệu môn học có trích nguồn, nhưng không làm hộ bài tập tính điểm.
3. Ghi nhận tiến độ thực tế và tạo phiên Reflect ngắn để đề xuất điều chỉnh cho tuần sau.
4. Cho giảng viên xem tiến độ lớp và tín hiệu nguy cơ ở dạng tổng hợp/ẩn danh.
5. Đo được tỷ lệ hoàn thành kế hoạch, tỷ lệ nộp đúng hạn, mức sử dụng Reflect và chất lượng câu trả lời có nguồn.

Ngưỡng thành công định lượng chưa được chốt; đây là một Known Ambiguity ở Mục 9, không được tự coi là cam kết sản phẩm.

## 2. User personas

| Vai trò | Mô tả | Mục tiêu chính | Quyền hạn trong MVP |
|---|---|---|---|
| **Sinh viên** | Học nhiều môn, có lịch cá nhân và mức tải khác nhau | Biết cần làm gì trong tuần, nhận hỗ trợ khi mắc kẹt và giảm trễ hạn | Xem môn/bài tập của mình; tạo, sửa và xác nhận kế hoạch; cập nhật tiến độ; hỏi đáp; thực hiện Reflect; xem lịch sử cá nhân |
| **Giảng viên/Cố vấn** | Theo dõi một lớp hoặc nhóm sinh viên nhưng không có tín hiệu sớm | Nhận biết khó khăn chung và nguy cơ chậm tiến độ để hỗ trợ đúng lúc | Quản lý tài liệu được phép dùng; xem dashboard tổng hợp; xem cảnh báo ẩn danh; ghi nhận quyết định can thiệp |

Quản trị hệ thống chưa phải persona có giao diện riêng trong MVP. Cấu hình model, quota và nguồn dữ liệu được vận hành bằng biến môi trường hoặc công cụ nội bộ.

## 3. User stories

P0 là bắt buộc cho MVP; P1 chỉ làm sau khi P0 ổn định; P2 là hướng mở rộng.

| ID | Ưu tiên | User story | Điều kiện chấp nhận chính |
|---|---|---|---|
| US-S01 | P0 | Là sinh viên, tôi muốn đăng nhập và chỉ xem dữ liệu của mình để bảo vệ riêng tư. | Hai vai trò có màn hình/quyền khác nhau; sinh viên không truy cập dashboard giảng viên. |
| US-S02 | P0 | Là sinh viên, tôi muốn xem assignment và deadline của nhiều môn tại một nơi để không bỏ sót việc. | Hiển thị được dữ liệu mô phỏng của nhiều môn; có trạng thái nguồn và thời điểm cập nhật. |
| US-S03 | P0 | Là sinh viên, tôi muốn AI đề xuất cách chia assignment thành các bước nhỏ để biết nên bắt đầu từ đâu. | Đề xuất có nhiệm vụ, thời lượng, thứ tự và hạn dự kiến; chưa lưu cho tới khi sinh viên xác nhận. |
| US-S04 | P0 | Là sinh viên, tôi muốn sửa và xác nhận kế hoạch tuần để kế hoạch phù hợp lịch thực tế. | Có màn hình xem trước; cho phép sửa; chỉ ghi kế hoạch sau khi bấm xác nhận. |
| US-S05 | P0 | Là sinh viên, tôi muốn cập nhật trạng thái nhiệm vụ để biết mình đang lệch kế hoạch ở đâu. | Hỗ trợ `todo`, `in_progress`, `done`; ghi thời điểm cập nhật; tính tiến độ tuần bằng quy tắc thường. |
| US-S06 | P0 | Là sinh viên, tôi muốn hỏi về nội dung môn học và thấy nguồn để kiểm chứng câu trả lời. | Câu trả lời grounded phải có tên tài liệu và vị trí tham chiếu; thiếu căn cứ thì hệ thống nói không đủ dữ liệu. |
| US-S07 | P0 | Là sinh viên, khi yêu cầu AI làm hộ bài, tôi muốn được chuyển sang gợi ý từng bước để vẫn tự giải quyết. | Guardrail chạy trong code trước bước sinh câu trả lời; không trả đáp án hoàn chỉnh; có lý do và hướng hỗ trợ thay thế. |
| US-S08 | P0 | Là sinh viên, tôi muốn nhìn lại tuần vừa qua để điều chỉnh tuần tiếp theo. | Phiên Reflect dùng tiến độ thật, ghi nhận nguyên nhân và chỉ tạo đề xuất re-plan sau khi sinh viên xác nhận. |
| US-I01 | P0 | Là giảng viên, tôi muốn xem tiến độ và điểm nghẽn chung của lớp để chuẩn bị hỗ trợ. | Dashboard không hiển thị nội dung chat riêng; dữ liệu lớp được tổng hợp/ẩn danh theo ngưỡng phù hợp. |
| US-I02 | P0 | Là giảng viên, tôi muốn xem tín hiệu nguy cơ và quyết định có can thiệp hay không. | Hệ thống nêu lý do gắn cờ; không tự gửi liên hệ hoặc xử phạt; giảng viên xác nhận hành động. |
| US-I03 | P1 | Là giảng viên, tôi muốn đưa tài liệu đã được phép sử dụng vào kho kiến thức của môn. | Xem trước tên file, môn và phạm vi truy cập trước khi index; có thể gỡ tài liệu. |
| US-S09 | P1 | Là sinh viên, tôi muốn đồng bộ Canvas ở chế độ chỉ đọc để giảm nhập thủ công. | Chỉ đọc course, assignment và due date; lỗi đồng bộ không làm mất kế hoạch hiện có. |
| US-S10 | P1 | Là sinh viên, tôi muốn nhận nhắc việc đã chọn để không quên milestone. | Người dùng opt-in, chọn kênh/tần suất và có thể tắt. |
| US-X01 | P2 | Là người dùng, tôi muốn mở X-Tutor trực tiếp trong Canvas qua LTI. | Ngoài phạm vi MVP Gate 01. |

## 4. Luồng chính (happy path)

### 4.1 Sinh viên: Plan → Do → Reflect

1. Sinh viên đăng nhập và chọn hồ sơ sinh viên.
2. Hệ thống tải danh sách môn, assignment và deadline từ bộ dữ liệu mô phỏng; nếu có kết nối Canvas read-only thì hiển thị nguồn và lần đồng bộ gần nhất.
3. Sinh viên chọn mục tiêu tuần, thời gian có thể học và assignment cần ưu tiên.
4. Planner tạo bản nháp gồm các milestone, thời lượng ước tính và hạn dự kiến.
5. Sinh viên xem trước, sửa hoặc từ chối bản nháp; chỉ khi bấm **Xác nhận kế hoạch** hệ thống mới ghi dữ liệu.
6. Trong tuần, sinh viên cập nhật trạng thái từng nhiệm vụ.
7. Khi cần hỗ trợ, sinh viên chọn môn rồi đặt câu hỏi. Guardrail kiểm tra yêu cầu trước khi gọi luồng RAG.
8. Nếu yêu cầu hợp lệ và có căn cứ, hệ thống trả lời kèm nguồn. Nếu là yêu cầu làm hộ, hệ thống từ chối phần đáp án và chuyển sang câu hỏi/gợi ý Socratic.
9. Cuối tuần, hệ thống tổng hợp kế hoạch và tiến độ, sau đó đặt 3–5 câu hỏi Reflect.
10. Sinh viên xem và xác nhận các điều chỉnh cho tuần sau.
11. Hệ thống lưu phiên Reflect và tạo bản nháp kế hoạch mới; sinh viên vẫn là người quyết định cuối cùng.

### 4.2 Giảng viên: xem tín hiệu và quyết định hỗ trợ

1. Giảng viên đăng nhập vào dashboard của lớp được phân quyền.
2. Hệ thống hiển thị tỷ lệ hoàn thành kế hoạch, nhiệm vụ có nguy cơ trễ và chủ đề gây khó khăn ở dạng tổng hợp.
3. Giảng viên mở một tín hiệu để xem lý do, độ mới của dữ liệu và hành động gợi ý.
4. Giảng viên chọn bỏ qua, theo dõi thêm hoặc xác nhận một biện pháp hỗ trợ. MVP không tự gửi thông báo hay áp dụng hình phạt.

## 5. Human-in-the-loop

Guardrail phải là nhánh xử lý trong code và được kiểm thử, không chỉ là câu lệnh trong system prompt.

| Hành động/rủi ro | Người xác nhận và thông tin phải thấy | Hành vi MVP |
|---|---|---|
| Lưu kế hoạch do AI đề xuất | Sinh viên thấy milestone, thời lượng, hạn và nguồn assignment trước khi bấm **Xác nhận** | Không tự ghi bản nháp AI vào kế hoạch chính thức |
| Sửa hoặc xóa mục tiêu/milestone | Sinh viên thấy phần thay đổi và ảnh hưởng tới tiến độ | Sửa được hoàn tác; xóa cần xác nhận riêng |
| Yêu cầu có dấu hiệu làm hộ | Sinh viên thấy lý do bị chặn và các lựa chọn hỗ trợ an toàn | Chặn trước khi sinh đáp án; không tự báo cáo sinh viên cho giảng viên |
| Index hoặc gỡ tài liệu môn học | Giảng viên thấy tên file, môn, loại tài liệu và phạm vi người được truy cập | Chỉ index sau xác nhận; việc gỡ yêu cầu xác nhận và cập nhật chỉ mục |
| Gắn cờ sinh viên/nguy cơ | Giảng viên thấy tín hiệu, dữ liệu đầu vào, thời điểm và mức tin cậy | AI chỉ đề xuất; giảng viên quyết định có can thiệp |
| Gửi email/thông báo ra ngoài | Người gửi xem người nhận, nội dung, kênh và thời điểm | Không tự gửi trong P0; nếu làm P1 phải có bước duyệt cuối |
| Hiển thị danh tính cá nhân cho giảng viên | Phải có chính sách trường và cơ sở đồng ý/quyền truy cập rõ ràng | P0 chỉ hiển thị tổng hợp/ẩn danh; không tự giải ẩn danh |
| Xóa dữ liệu cá nhân | Chủ dữ liệu thấy phạm vi dữ liệu và hậu quả | Xác nhận hai bước; ghi audit event nhưng không lưu lại nội dung đã xóa |

## 6. Xử lý lỗi & giới hạn

| Tình huống | Hệ thống xử lý | Thông báo cho người dùng |
|---|---|---|
| LLM timeout, provider lỗi hoặc hết quota | Dừng an toàn, không ghi thay đổi dang dở; cho phép thử lại | “AI tạm thời chưa phản hồi. Kế hoạch/dữ liệu của bạn chưa bị thay đổi.” |
| LLM trả sai JSON/schema | Validate bằng Pydantic, retry tối đa một lần; thất bại thì chuyển sang mẫu thủ công | “Không thể tạo bản nháp hợp lệ. Bạn có thể nhập nhiệm vụ thủ công.” |
| Không tìm thấy tài liệu liên quan | Không suy đoán; yêu cầu chọn đúng môn hoặc bổ sung tài liệu | “Chưa có đủ căn cứ trong tài liệu môn học để trả lời.” |
| Câu trả lời không tạo được citation hợp lệ | Không gắn nhãn grounded; không hiển thị câu trả lời như kiến thức đã kiểm chứng | “Không xác minh được nguồn cho câu trả lời này.” |
| Prompt injection hoặc yêu cầu làm hộ | Chặn nhánh nguy hiểm trước khi gọi tutor; đưa hỗ trợ Socratic | Nêu ngắn gọn giới hạn và đề nghị giải thích khái niệm/gợi ý bước tiếp theo |
| Canvas không kết nối hoặc dữ liệu cũ | Giữ dữ liệu đã có, hiển thị lần đồng bộ gần nhất; cho nhập thủ công/dùng mock | “Không đồng bộ được Canvas; đang dùng dữ liệu gần nhất.” |
| Lỗi ghi cơ sở dữ liệu | Rollback giao dịch, chống ghi trùng bằng request ID khi phù hợp | “Chưa lưu được thay đổi; vui lòng thử lại.” |
| Dashboard có nhóm quá ít người | Không hiển thị lát cắt có nguy cơ nhận diện cá nhân | “Chưa đủ dữ liệu để hiển thị thống kê an toàn.” |

### Giới hạn phải nói thẳng

- X-Tutor không nộp bài, làm bài, chấm điểm hoặc thay đổi điểm trên Canvas.
- X-Tutor không bảo đảm mọi câu trả lời AI đều đúng; câu trả lời học thuật phải có nguồn để người dùng kiểm tra.
- MVP không chứng minh tác động dài hạn lên năng lực tự học.
- MVP không chẩn đoán sức khỏe tâm thần, năng lực cá nhân hoặc đưa ra quyết định kỷ luật.
- Lập kế hoạch hỗ trợ nhiều môn; RAG và bộ đánh giá chuyên sâu chỉ được pilot trên 1–2 môn đại diện.
- Canvas LTI cấp trường và tích hợp ghi dữ liệu ngược vào Canvas nằm ngoài MVP.

## 7. Dữ liệu

| Nguồn | Dữ liệu/định dạng dự kiến | Cách lấy và mục đích | Phạm vi MVP |
|---|---|---|---|
| Canvas mô phỏng | Course, assignment, rubric, due date ở JSON/CSV | Bộ dữ liệu do đội tạo, không chứa dữ liệu cá nhân thật | P0, nguồn mặc định |
| Canvas REST API | Course, assignment, due date | OAuth/token chỉ đọc của tài khoản thử nghiệm đã cho phép | P1, nếu có sandbox/quyền truy cập |
| Tài liệu môn học | PDF, TXT, Markdown; định dạng khác phải chuyển đổi hoặc được hỗ trợ riêng | Tài liệu công khai, do đội tạo hoặc được giảng viên cho phép | Pilot trên 1–2 môn |
| Dữ liệu sinh viên | Mục tiêu, kế hoạch, tiến độ, câu trả lời Reflect | Người dùng nhập và xác nhận trong ứng dụng | Chỉ chủ dữ liệu xem chi tiết |
| Log an toàn/đánh giá | Loại intent, trạng thái guardrail, latency, lỗi; hạn chế lưu nội dung thô | Phục vụ debug và evaluation | Dùng ID giả danh; không đưa chat riêng lên dashboard |
| Dữ liệu dashboard | Tỷ lệ hoàn thành, nhóm nhiệm vụ trễ, chủ đề khó | Tổng hợp từ dữ liệu sử dụng | Ẩn danh/tổng hợp; áp dụng ngưỡng nhóm tối thiểu |

Nguyên tắc dữ liệu:

- Chỉ dùng dữ liệu công khai, mô phỏng, đã ẩn danh hoặc có quyền sử dụng rõ ràng.
- Không đưa API key, token Canvas hoặc dữ liệu định danh vào prompt/log.
- Không dùng nội dung chat riêng để đánh giá kỷ luật.
- Người dùng phải có cách xem và yêu cầu xóa dữ liệu cá nhân của mình.
- Chính sách thời hạn lưu dữ liệu phải được chốt trước khi thử nghiệm với người dùng thật.

## 8. Tech stack (dự kiến và trạng thái code)

| Thành phần | Hiện có trong repo ngày 20/09/2026 | Mục tiêu MVP |
|---|---|---|
| Ngôn ngữ/backend | Python 3.11, FastAPI, Uvicorn | Giữ nguyên; REST API có schema Pydantic và xử lý lỗi ổn định |
| Agent | LangGraph với hai node mẫu `analyze` và `respond` | Mở rộng thành router/guardrail, planner, grounded tutor và reflector theo từng lát dọc P0 |
| LLM | `ChatOpenAI` qua endpoint tương thích OpenAI/OpenRouter; model lấy từ biến môi trường, default code là `openai/gpt-4o-mini` | Một model cấu hình qua `.env`; chưa cam kết model routing trong MVP |
| API | `/health`, `/api/v1/status`, `/api/v1/chat` | Bổ sung auth/role, course, plan, progress, reflect và dashboard endpoints |
| Cơ sở dữ liệu | Cấu hình mặc định SQLite; chưa có ORM/schema nghiệp vụ | SQLite cho phát triển/MVP ban đầu; chỉ chuyển PostgreSQL khi có nhu cầu deploy nhiều người dùng |
| Vector store/RAG | Có biến `CHROMA_PERSIST_DIR`, nhưng dependency và ingestion chưa được bật | Chọn và triển khai một vector store sau spike; chưa mặc định Qdrant khi code chưa có |
| Frontend | Chưa có frontend trong repo | Next.js cho hai vai trò; phạm vi màn hình bám theo P0 |
| Auth | Chưa triển khai | Phải chốt trước khi xây màn hình đa vai trò; mọi endpoint nghiệp vụ phải kiểm tra role |
| Test | pytest/pytest-asyncio, test health/status/chat mẫu; ruff | Unit test cho guardrail, schema, permission; integration test cho happy path và lỗi chính |
| Deploy | Docker backend chạy FastAPI; chưa có cấu hình production/live URL | Chốt Render/GCP Cloud Run cho backend và Vercel cho frontend trước Gate triển khai |
| Cache/queue | Chưa có Redis hoặc worker | Không bắt buộc P0; chỉ thêm khi có số liệu chứng minh cần thiết |

## 9. Known Ambiguities

| Điểm chưa chốt | Giả định tạm thời để không chặn code | Khi nào phải chốt |
|---|---|---|
| Có quyền truy cập Canvas sandbox/API hay không | P0 dùng Canvas mock; không phụ thuộc kết nối thật | Trước khi bắt đầu US-S09 |
| Cơ chế đăng nhập và phân quyền | Chưa chọn nhà cung cấp; API vẫn phải thiết kế theo `student`/`instructor` | Trước khi xây frontend và endpoint nghiệp vụ đầu tiên |
| Chroma hay Qdrant cho RAG | Chưa có vector store nào được triển khai; spike bằng cùng một bộ tài liệu/câu hỏi | Trước US-S06; cập nhật PRD và config trong cùng PR |
| Model chạy chính thức | Runtime lấy từ `.env`; `.env.example` và default code hiện chưa thống nhất tên model | Trước khi tạo baseline evaluation; tài liệu và code phải dùng cùng một cấu hình |
| Ngưỡng nào được xem là “có nguy cơ trễ” | Dùng rule minh bạch trên dữ liệu mock, chưa tự động can thiệp | Trước khi nghiệm thu US-I02 |
| Khi nào giảng viên được xem danh tính sinh viên | P0 chỉ tổng hợp/ẩn danh; không giải ẩn danh | Chỉ chốt sau khi có chính sách/đồng ý rõ ràng từ đơn vị thử nghiệm |
| Ngưỡng thành công của MVP | Trước mắt chỉ thu baseline: đúng hạn, hoàn thành kế hoạch, Reflect, citation và guardrail | Chốt sau pilot nhỏ/baseline, trước khi tuyên bố tác động |
| Định dạng tài liệu được hỗ trợ | Ưu tiên PDF/TXT/Markdown; chưa cam kết DOCX/PPTX | Trước khi xây ingestion UI |
| Kênh nhắc việc | P0 chỉ nhắc trong ứng dụng; không gửi email/push tự động | Trước US-S10 |
| Nơi deploy và giới hạn quota | Chạy local/Docker cho đến khi có lựa chọn hosting và ngân sách | Trước Gate triển khai/live URL |

Khi một ambiguity được chốt, đội phải cập nhật mục tương ứng trong PRD cùng thay đổi code; không để quyết định chỉ tồn tại trong chat, slide hoặc issue.
