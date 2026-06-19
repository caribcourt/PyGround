/* ============================================================
   Pyground — curriculum content
   Each lesson is plain data. To add lessons later, add objects
   to this list. The engine (index.html) never needs to change.

   Fields:
     id        unique short id (used to save progress) — never reuse
     module    grouping label shown in the sidebar
     title     lesson title
     concept   teaching text (HTML allowed)
     task      the challenge instructions (HTML allowed)
     starter   code pre-filled in the editor
     expected  the exact output the correct code should print
               (every one is verified by running it in real Python)
     hints     2-4 hints, revealed one at a time
   ============================================================ */

window.LESSONS = [

  /* ---------- Phase 1 · Module 1: Output ---------- */
  {
    id: "p1-output-1",
    module: "1 · Output",
    title: "Printing output",
    concept:
      "<p>The <code>print()</code> function tells Python to show something on the screen.</p>" +
      "<p>Each <code>print()</code> automatically starts a new line, so calling it three times prints three separate lines.</p>",
    task:
      "<p>Make Python print the numbers <b>1</b>, <b>2</b>, and <b>3</b> — each on its own line, exactly like this:</p>" +
      "<pre>1\n2\n3</pre>",
    starter: "# Print 1, 2, and 3, each on its own line\nprint(1)",
    expected: "1\n2\n3",
    hints: [
      "Each print() call automatically moves to a new line. How many separate print() calls make three lines?",
      "You already have print(1). Add two more lines below it, one for 2 and one for 3, following the same pattern.",
      "Write three statements on three lines: print(1), then print(2), then print(3). No quotes around the numbers."
    ]
  },
  {
    id: "p1-output-2",
    module: "1 · Output",
    title: "Printing text",
    concept:
      "<p>To print words instead of numbers, wrap them in quotes. Quotes tell Python \"this is text\".</p>" +
      "<p>Text in quotes is called a <b>string</b>.</p>",
    task:
      "<p>Print this song title exactly:</p>" +
      "<pre>Bohemian Rhapsody</pre>",
    starter: "# Print the song title exactly\n",
    expected: "Bohemian Rhapsody",
    hints: [
      "Put the text inside print(), wrapped in quotes.",
      "Either single or double quotes work: print('...') or print(\"...\").",
      "Type: print(\"Bohemian Rhapsody\") — spelling and capitals must match exactly."
    ]
  },
  {
    id: "p1-output-3",
    module: "1 · Output",
    title: "Printing several things at once",
    concept:
      "<p>You can print more than one thing in a single <code>print()</code> by separating them with commas.</p>" +
      "<p>Python puts a space between each item automatically.</p>",
    task:
      "<p>Using <b>one</b> print() with a comma, produce exactly this line:</p>" +
      "<pre>Song: Bohemian Rhapsody</pre>",
    starter: "# Use one print() with a comma\n",
    expected: "Song: Bohemian Rhapsody",
    hints: [
      "Put two pieces of text inside one print(), separated by a comma.",
      "The first piece is \"Song:\" and the second is the title.",
      "Type: print(\"Song:\", \"Bohemian Rhapsody\") — the comma adds the space for you."
    ]
  },

  /* ---------- Phase 1 · Module 2: Variables ---------- */
  {
    id: "p1-vars-1",
    module: "2 · Variables",
    title: "Storing a value",
    concept:
      "<p>A <b>variable</b> is a name that holds a value, so you can reuse it later.</p>" +
      "<p>You create one with an equals sign: <code>title = \"Bohemian Rhapsody\"</code>. After that, the name <code>title</code> stands for that text.</p>",
    task:
      "<p>Store the title <code>\"Bohemian Rhapsody\"</code> in a variable called <code>title</code>, then print the variable. The output should be:</p>" +
      "<pre>Bohemian Rhapsody</pre>",
    starter: "# Store the title in a variable, then print the variable\ntitle = \n",
    expected: "Bohemian Rhapsody",
    hints: [
      "First line: give title a value with =. Second line: print(title).",
      "Note there are no quotes around title in the print — you want the value it holds, not the word \"title\".",
      "title = \"Bohemian Rhapsody\"  then on the next line  print(title)"
    ]
  },
  {
    id: "p1-vars-2",
    module: "2 · Variables",
    title: "Using two variables together",
    concept:
      "<p>Variables become powerful when you combine them. You can pass several into one <code>print()</code>, mixing variables and text.</p>",
    task:
      "<p>Make a variable <code>title</code> = <code>\"Bohemian Rhapsody\"</code> and a variable <code>artist</code> = <code>\"Queen\"</code>. " +
      "Then print them with the word <b>by</b> between them, to get exactly:</p>" +
      "<pre>Bohemian Rhapsody by Queen</pre>",
    starter: "title = \"Bohemian Rhapsody\"\nartist = \"Queen\"\n# Now print them with \"by\" in the middle\n",
    expected: "Bohemian Rhapsody by Queen",
    hints: [
      "Use one print() with three things separated by commas: the title, the word \"by\", and the artist.",
      "Only \"by\" needs quotes — title and artist are variables.",
      "print(title, \"by\", artist)"
    ]
  },
  {
    id: "p1-vars-3",
    module: "2 · Variables",
    title: "Updating a variable",
    concept:
      "<p>A variable can change. You can give it a new value based on its old one.</p>" +
      "<p><code>plays = plays + 50</code> means \"take the current plays, add 50, and store the result back\". This idea powers a lot of programming later.</p>",
    task:
      "<p>Start with <code>plays = 100</code>. Then add 50 to it, and print the result:</p>" +
      "<pre>150</pre>",
    starter: "plays = 100\n# Add 50 to plays, then print it\n",
    expected: "150",
    hints: [
      "On a new line, set plays to itself plus 50.",
      "plays = plays + 50",
      "Then print(plays). The output should be 150."
    ]
  },

  /* ---------- Phase 1 · Module 3: Numbers & math ---------- */
  {
    id: "p1-math-1",
    module: "3 · Numbers & math",
    title: "Doing math",
    concept:
      "<p>Python does arithmetic with <code>+</code> <code>-</code> <code>*</code> (multiply) and <code>/</code> (divide).</p>" +
      "<p>You can do math directly inside <code>print()</code>, or with variables.</p>",
    task:
      "<p>A track is <code>6</code> minutes long and was played <code>5</code> times. " +
      "Store those in variables <code>minutes</code> and <code>plays</code>, then print the total minutes listened (minutes × plays):</p>" +
      "<pre>30</pre>",
    starter: "minutes = 6\nplays = 5\n# Print minutes multiplied by plays\n",
    expected: "30",
    hints: [
      "Multiplication uses the * symbol.",
      "Print the two variables multiplied together.",
      "print(minutes * plays)"
    ]
  }

];
