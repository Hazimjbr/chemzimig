import os

def fix_roadmap():
    path = "ROADMAP.md"
    if not os.path.exists(path):
        print("ROADMAP.md not found.")
        return

    # Try reading as UTF-16 LE
    try:
        with open(path, "r", encoding="utf-16") as f:
            content = f.read()
        print("Read ROADMAP.md as UTF-16.")
    except Exception:
        try:
            with open(path, "r", encoding="utf-8-sig") as f:
                content = f.read()
            print("Read ROADMAP.md as UTF-8-sig.")
        except Exception:
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            print("Read ROADMAP.md as UTF-8 with ignore.")

    # Fix the merged header formatting issue
    corrupt_line = "### (8) 📚 توحيد وتطوير هيكلية- [x] **تحديث لوحة تحكم أمن الأجهزة (Interactive Admin Device Panel) (مكتمل):** جعل الصناديق الإحصائية الأربعة في لوحة الإشراف تفاعلية وقابلة للنقر كفلاتر سريعة للتحكم بأجهزة الطلاب (Total, Approved, Pending, Blocked)."
    fixed_lines = "### (8) 📚 توحيد وتطوير هيكلية المناهج\n- [x] **تحديث لوحة تحكم أمن الأجهزة (Interactive Admin Device Panel) (مكتمل):** جعل الصناديق الإحصائية الأربعة في لوحة الإشراف تفاعلية وقابلة للنقر كفلاتر سريعة للتحكم بأجهزة الطلاب (Total, Approved, Pending, Blocked)."
    
    if corrupt_line in content:
        content = content.replace(corrupt_line, fixed_lines)
        print("Fixed corrupted header at line 71.")
    
    # Save back as clean UTF-8
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Saved ROADMAP.md in UTF-8 format.")

if __name__ == "__main__":
    fix_roadmap()
