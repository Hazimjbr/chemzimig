import re
import random

def extract_sentences(text):
    text = re.sub(r'\n+', ' ', text)
    text = re.sub(r' +', ' ', text)
    # Split by common Arabic punctuation
    sentences = re.split(r'[.،؛?!:]', text)
    # Filter and clean sentences
    valid_sentences = []
    arabic_pattern = re.compile(r'[\u0600-\u06FF]')
    for s in sentences:
        s = s.strip()
        # Keep sentences of reasonable length (between 6 and 20 words)
        words = s.split()
        if 6 <= len(words) <= 20:
            # Check if majority of words have Arabic characters to filter out OCR garbage
            arabic_words = [w for w in words if arabic_pattern.search(w)]
            if len(arabic_words) > len(words) * 0.7:
                valid_sentences.append(s)
    return valid_sentences

def generate_mcqs(sentences, num_questions=100):
    mcqs = []
    # Ensure we don't try to sample more than we have
    sampled_sentences = random.sample(sentences, min(num_questions, len(sentences)))

    # Try to reach num_questions even if we have fewer sentences by reusing some
    while len(sampled_sentences) < num_questions and len(sentences) > 0:
         sampled_sentences.append(random.choice(sentences))

    for idx, sentence in enumerate(sampled_sentences):
        words = sentence.split()
        # Find a suitable word to blank out (preferably a longer word, not the first or last, and must be Arabic)
        arabic_pattern = re.compile(r'[\u0600-\u06FF]')
        candidates = [i for i, w in enumerate(words) if len(w) > 3 and 0 < i < len(words) - 1 and arabic_pattern.search(w)]

        if not candidates:
            # Fallback to any Arabic word > 2 chars
            candidates = [i for i, w in enumerate(words) if len(w) > 2 and arabic_pattern.search(w)]

        if not candidates:
            # Fallback to a random index
            candidates = [random.randint(0, len(words) - 1)]

        blank_idx = random.choice(candidates)
        correct_answer = words[blank_idx]

        # Create question text
        words_blanked = list(words)
        words_blanked[blank_idx] = "........"
        question_text = f"السؤال {idx + 1}: " + " ".join(words_blanked)

        # Generate dummy distractors
        distractors = [w for w in words if w != correct_answer and arabic_pattern.search(w)]
        attempts = 0
        while len(set(distractors)) < 3 and attempts < 100:
            random_sentence = random.choice(sentences)
            distractors.extend([w for w in random_sentence.split() if len(w) > 3 and w != correct_answer and arabic_pattern.search(w)])
            attempts += 1

        unique_distractors = list(set(distractors))
        random.shuffle(unique_distractors)
        chosen_distractors = unique_distractors[:3]

        # Combine and shuffle options
        options = [correct_answer] + chosen_distractors
        random.shuffle(options)

        letters = ['أ', 'ب', 'ج', 'د']
        correct_letter = letters[options.index(correct_answer)]

        mcq = f"{question_text}\n"
        for i, opt in enumerate(options):
            mcq += f"{letters[i]}) {opt}\n"
        mcq += f"الإجابة الصحيحة: {correct_letter}) {correct_answer}\n\n"

        mcqs.append(mcq)

    return mcqs

if __name__ == "__main__":
    try:
        with open("all_text_unit12.txt", "r", encoding="utf-8") as f:
            text = f.read()

        sentences = extract_sentences(text)
        print(f"Extracted {len(sentences)} valid sentences.")

        mcqs = generate_mcqs(sentences, 100)

        with open("questions_unit12_raw.txt", "w", encoding="utf-8") as f:
            for q in mcqs:
                f.write(q)

        print("Generated 100 MCQs successfully.")
    except Exception as e:
        print(f"Error: {e}")
