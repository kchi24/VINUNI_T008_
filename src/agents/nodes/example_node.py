from src.agents.state import AgentState
from src.services.llm import get_llm


async def analyze_node(state: AgentState) -> dict:
    """Phân tích query từ user."""
    query = state.get("query", "").strip()
    if not query:
        return {"error": "Query không được để trống."}

    return {"analysis": "Đã kiểm tra và chuẩn bị yêu cầu cho mô hình."}


async def respond_node(state: AgentState) -> dict:
    """Gọi LLM qua OpenRouter và tạo phản hồi."""
    query = state.get("query", "")
    error = state.get("error")

    if error:
        return {"response": f"Lỗi: {error}"}

    llm = get_llm()
    result = await llm.ainvoke(
        [
            (
                "system",
                "Bạn là trợ lý AI hữu ích. Trả lời chính xác, rõ ràng và ưu tiên tiếng Việt khi người dùng hỏi bằng tiếng Việt.",
            ),
            ("human", query),
        ]
    )

    return {"response": str(result.content)}
