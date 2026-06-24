# 🤖 AI ChatBot Setup Guide - RAG Implementation

Daivat's Portfolio me AI-powered chatbot integrate karne ke liye complete guide.

---

## 📁 Project Structure

```
daivatportfolio/
├── backend/                          ← Python RAG Backend
│   ├── daivat_intro.txt             ← Knowledge base (edit this!)
│   ├── main.py                      ← FastAPI server
│   ├── rag_chain.py                 ← RAG pipeline (LangChain + Mistral)
│   ├── requirements.txt             ← Python dependencies
│   ├── .env.example                 ← Environment template
│   └── README.md                    ← Backend docs
│
└── src/
    └── components/
        └── common/
            └── ChatBot/              ← React Frontend
                ├── ChatBot.jsx      ← Chat UI component
                └── ChatBot.css      ← Styles (dark/light theme)
```

---

## 🚀 Setup Steps

### Step 1: Backend Setup (Python)

#### 1.1 Install Python Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### 1.2 Get Mistral API Key (FREE)
1. Visit: https://console.mistral.ai/
2. Sign up / Login
3. Go to "API Keys" section
4. Create new API key
5. Copy the key

#### 1.3 Configure Environment
```bash
# Copy example file
copy .env.example .env

# Edit .env file and paste your API key
MISTRAL_API_KEY=your_actual_mistral_api_key_here
```

#### 1.4 Customize Knowledge Base (Optional)
Edit `daivat_intro.txt` with your own information:
- Skills
- Projects
- Experience
- Education
- Hobbies

#### 1.5 Start Backend Server
```bash
python main.py
```

✅ Server running at: `http://localhost:8000`

Test it: Open browser → `http://localhost:8000` (should show API status)

---

### Step 2: Frontend Setup (React)

#### 2.1 Install Dependencies (if needed)
```bash
# Go back to project root
cd ..

# Install any missing packages
npm install
```

#### 2.2 Start React Dev Server
```bash
npm start
```

✅ React app running at: `http://localhost:3000`

---

## 🎯 How to Use

1. **Start Backend First:**
   ```bash
   cd backend
   python main.py
   ```

2. **Start Frontend:**
   ```bash
   npm start
   ```

3. **Open Portfolio:**
   - Go to `http://localhost:3000`
   - Look for floating chat button (bottom-right corner)
   - Click to open chatbot
   - Ask questions about Daivat!

---

## 💬 Example Questions to Ask

- "What are Daivat's skills?"
- "Tell me about his projects"
- "What technologies does he use?"
- "What is his experience?"
- "Tell me about Quick Eats project"
- "Is he available for work?"

---

## 🔧 Tech Stack

### Backend (Python)
- **FastAPI** - Modern web framework
- **LangChain** - RAG orchestration
- **Mistral AI** - LLM (mistral-small-latest)
- **ChromaDB** - Vector database
- **Pydantic** - Structured output

### Frontend (React)
- **React** - UI framework
- **Context API** - Theme management (dark/light)
- **Fetch API** - Backend communication

---

## 🎨 Features Implemented

### RAG Concepts Applied ✅
1. **Document Loading** - Text file ko load karna
2. **Text Chunking** - Document ko chhote parts me todna
3. **Embeddings** - Text ko vectors me convert karna
4. **Vector Store** - ChromaDB me embeddings store karna
5. **Retrieval** - Relevant chunks dhoondhna
6. **LLM Integration** - Mistral AI se response generate karna

### GenAI Concepts Applied ✅
1. **Output Parser** - Structured JSON response
2. **Prompt Template** - Custom system prompt
3. **Structured Output** - Pydantic schema enforcement
   - `answer` - Main response
   - `source_used` - Which knowledge was used
   - `suggested_next_question` - Follow-up suggestion

### UI Features ✅
1. **Floating Chat Button** - Bottom-right corner
2. **Dark/Light Theme** - Matches portfolio theme
3. **Typing Indicator** - Shows when AI is thinking
4. **Suggested Questions** - Click to ask follow-up
5. **Smooth Animations** - Slide-up, fade-in effects
6. **Responsive Design** - Works on mobile too

---

## 🐛 Troubleshooting

### Backend Issues

**Error: "MISTRAL_API_KEY not found"**
```bash
# Make sure .env file exists in backend folder
cd backend
dir .env

# If not, copy from example
copy .env.example .env

# Edit .env and add your API key
```

**Error: "Module not found"**
```bash
cd backend
pip install -r requirements.txt
```

**ChromaDB errors**
```bash
# Delete vector database and restart
cd backend
rmdir /s chroma_db
python main.py
```

### Frontend Issues

**Chat button not showing**
- Check browser console for errors
- Make sure ChatBot is imported in App.js
- Clear browser cache

**"Failed to connect to server"**
- Make sure backend is running on port 8000
- Check `http://localhost:8000` in browser
- Verify CORS is enabled in main.py

**Messages not sending**
- Check backend logs for errors
- Verify Mistral API key is correct
- Check network tab in browser DevTools

---

## 📝 Customization Guide

### Change Knowledge Base
Edit `backend/daivat_intro.txt` with your info, then restart backend.

### Modify Response Format
Edit `ChatResponse` class in `backend/rag_chain.py`:
```python
class ChatResponse(BaseModel):
    answer: str
    source_used: str
    suggested_next_question: Optional[str]
    # Add your custom fields here
```

### Adjust Retrieval Settings
In `backend/rag_chain.py`, modify:
```python
# Number of chunks to retrieve
search_kwargs={"k": 3}  # Change 3 to any number

# Chunk size
chunk_size=500  # Increase for longer chunks
chunk_overlap=50  # Overlap between chunks
```

### Change Chat UI Colors
Edit `src/components/common/ChatBot/ChatBot.css`:
```css
/* Change gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## 🎓 Learning Resources

**RAG Concepts:**
- LangChain Docs: https://python.langchain.com/docs/
- Mistral AI Docs: https://docs.mistral.ai/

**FastAPI:**
- Official Docs: https://fastapi.tiangolo.com/

**ChromaDB:**
- Getting Started: https://docs.trychroma.com/

---

## 📊 System Flow Diagram

```
User Question (React)
        ↓
    POST /chat
        ↓
FastAPI Backend (main.py)
        ↓
RAG Chain (rag_chain.py)
        ↓
    Retriever
        ↓
ChromaDB Vector Store
        ↓
Top 3 Relevant Chunks
        ↓
Mistral AI LLM
        ↓
Structured Output (Pydantic)
        ↓
JSON Response
        ↓
React ChatBot UI
```

---

## ✅ Checklist

Before running:
- [ ] Python installed (3.8+)
- [ ] Node.js installed
- [ ] Mistral API key obtained
- [ ] Backend dependencies installed
- [ ] .env file created with API key
- [ ] Backend server running (port 8000)
- [ ] React dev server running (port 3000)

---

## 🎉 Success!

Agar sab kuch theek se setup ho gaya, toh:
1. Portfolio kholo (`http://localhost:3000`)
2. Bottom-right me chat button dikhega
3. Click karke chatbot se baat karo
4. AI tumhare baare me answer dega based on `daivat_intro.txt`!

---

## 📞 Need Help?

Check:
1. Backend logs (terminal where `python main.py` is running)
2. React console (browser DevTools → Console)
3. Network tab (browser DevTools → Network)

Common fixes:
- Restart both servers
- Clear browser cache
- Check API key is correct
- Verify both servers are running

---

**Happy Coding! 🚀**
