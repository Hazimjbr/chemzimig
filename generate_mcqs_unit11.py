import re
import random

def extract_sentences(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Clean the text: remove newlines, multiple spaces, irrelevant scanner artifacts
    text = re.sub(r'\n+', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'Scanned with.*?CamScanner', '', text, flags=re.IGNORECASE)
    text = re.sub(r'طثا لعصموه8.*?عممقةء 5م © © أ', '', text)
    text = re.sub(r'[A-Za-z]+', '', text) # Remove English artifacts

    # Split into sentences based on common Arabic punctuation marks or just arbitrary chunks if no punctuation
    sentences = re.split(r'[.؟!:]+', text)

    valid_sentences = []
    for s in sentences:
        s = s.strip()
        # Keep sentences that are relatively long but not too long to form a meaningful question
        if 40 < len(s) < 200:
            valid_sentences.append(s)

    return valid_sentences

def generate_distractors(sentences, num=3):
    distractors = []
    for _ in range(num):
        # Pick a random sentence and take a chunk from it as a distractor
        s = random.choice(sentences)
        words = s.split()
        if len(words) > 3:
            start_idx = random.randint(0, len(words) - 3)
            distractors.append(" ".join(words[start_idx:start_idx+random.randint(2,4)]))
        else:
            distractors.append(s)
    return distractors

def generate_questions(sentences, num_questions=100):
    questions = []
    random.shuffle(sentences)

    # We will try to generate 100 questions. If we don't have enough sentences, we'll repeat or make slightly different variations.
    count = 0
    while count < num_questions:
        for s in sentences:
            if count >= num_questions:
                break

            words = s.split()
            if len(words) < 5:
                continue

            # Find a suitable phrase to blank out
            # We will blank out a noun or phrase at the end or middle
            blank_idx = random.randint(1, len(words) - 2)
            blank_length = random.randint(1, min(3, len(words) - blank_idx))

            correct_answer = " ".join(words[blank_idx:blank_idx+blank_length])
            question_text = " ".join(words[:blank_idx]) + " (......) " + " ".join(words[blank_idx+blank_length:])

            distractors = generate_distractors(sentences, 3)
            options = [correct_answer] + distractors
            random.shuffle(options)

            correct_index = options.index(correct_answer)

            # Ensure correct formatting with Arabic letters
            arabic_letters = ['أ', 'ب', 'ج', 'د']
            options_dict = {arabic_letters[i]: options[i] for i in range(4)}
            correct_letter = arabic_letters[correct_index]

            questions.append({
                'question': f"السؤال {count + 1}: {question_text}",
                'options': options_dict,
                'answer': correct_letter
            })
            count += 1

        if count < num_questions:
             # If we run out of sentences, just shuffle and go again
            random.shuffle(sentences)

    return questions

def save_to_txt(questions, filename="questions_unit11_raw.txt"):
    with open(filename, 'w', encoding='utf-8') as f:
        for q in questions:
            f.write(f"{q['question']}\n")
            for letter, option in q['options'].items():
                f.write(f"{letter}) {option}\n")
            f.write(f"الإجابة الصحيحة: {q['answer']}\n\n")

if __name__ == "__main__":
    sentences = extract_sentences("all_text_unit11.txt")
    print(f"Extracted {len(sentences)} valid sentences.")

    # Ensure we have at least some sentences
    if len(sentences) < 10:
        # Fallback if parsing was too strict
        with open("all_text_unit11.txt", 'r', encoding='utf-8') as f:
            text = f.read()
        sentences = [s.strip() for s in text.split('\n') if len(s.strip()) > 20]
        print(f"Fallback extracted {len(sentences)} lines.")

    questions = generate_questions(sentences, 100)
    save_to_txt(questions)
    print("Generated 100 questions.")
