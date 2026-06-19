/* ============================================================
   Pyground — curriculum content
   Add lessons by appending objects to this list. The engine
   (index.html) never changes. Every "expected" value below was
   produced by running the solution in real Python 3.12.

   Fields: id, module, title, concept(HTML), task(HTML),
           starter, expected, hints[]
   Never reuse or rename an id — it is the key used to save progress.
   ============================================================ */

window.LESSONS = [

  /* ---------- Module 1 · Output ---------- */
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
    task: "<p>Print this song title exactly:</p><pre>Bohemian Rhapsody</pre>",
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
    task: "<p>Using <b>one</b> print() with a comma, produce exactly this line:</p><pre>Song: Bohemian Rhapsody</pre>",
    starter: "# Use one print() with a comma\n",
    expected: "Song: Bohemian Rhapsody",
    hints: [
      "Put two pieces of text inside one print(), separated by a comma.",
      "The first piece is \"Song:\" and the second is the title.",
      "Type: print(\"Song:\", \"Bohemian Rhapsody\") — the comma adds the space for you."
    ]
  },

  /* ---------- Module 2 · Variables ---------- */
  {
    id: "p1-vars-1",
    module: "2 · Variables",
    title: "Storing a value",
    concept:
      "<p>A <b>variable</b> is a name that holds a value, so you can reuse it later.</p>" +
      "<p>You create one with an equals sign: <code>title = \"Bohemian Rhapsody\"</code>. After that, the name <code>title</code> stands for that text.</p>",
    task: "<p>Store the title <code>\"Bohemian Rhapsody\"</code> in a variable called <code>title</code>, then print the variable. The output should be:</p><pre>Bohemian Rhapsody</pre>",
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
    concept: "<p>Variables become powerful when you combine them. You can pass several into one <code>print()</code>, mixing variables and text.</p>",
    task: "<p>Make a variable <code>title</code> = <code>\"Bohemian Rhapsody\"</code> and a variable <code>artist</code> = <code>\"Queen\"</code>. Then print them with the word <b>by</b> between them, to get exactly:</p><pre>Bohemian Rhapsody by Queen</pre>",
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
    task: "<p>Start with <code>plays = 100</code>. Then add 50 to it, and print the result:</p><pre>150</pre>",
    starter: "plays = 100\n# Add 50 to plays, then print it\n",
    expected: "150",
    hints: [
      "On a new line, set plays to itself plus 50.",
      "plays = plays + 50",
      "Then print(plays). The output should be 150."
    ]
  },

  /* ---------- Module 3 · Numbers & math ---------- */
  {
    id: "p1-math-1",
    module: "3 · Numbers & math",
    title: "Doing math",
    concept:
      "<p>Python does arithmetic with <code>+</code> <code>-</code> <code>*</code> (multiply) and <code>/</code> (divide).</p>" +
      "<p>You can do math directly inside <code>print()</code>, or with variables.</p>",
    task: "<p>A track is <code>6</code> minutes long and was played <code>5</code> times. Store those in variables <code>minutes</code> and <code>plays</code>, then print the total minutes listened (minutes × plays):</p><pre>30</pre>",
    starter: "minutes = 6\nplays = 5\n# Print minutes multiplied by plays\n",
    expected: "30",
    hints: [
      "Multiplication uses the * symbol.",
      "Print the two variables multiplied together.",
      "print(minutes * plays)"
    ]
  },
  {
    id: "p1-math-2",
    module: "3 · Numbers & math",
    title: "Division gives a decimal",
    concept:
      "<p>The divide operator <code>/</code> always gives a decimal number (Python calls it a <b>float</b>), even when it divides evenly.</p>" +
      "<p>So <code>10 / 2</code> is <code>5.0</code>, not <code>5</code>.</p>",
    task: "<p>An album is <code>36</code> minutes long with <code>12</code> tracks. Print the average track length (36 divided by 12):</p><pre>3.0</pre>",
    starter: "# Print 36 divided by 12\n",
    expected: "3.0",
    hints: [
      "Use the / operator inside print().",
      "Remember / always produces a decimal.",
      "print(36 / 12) — the result shows as 3.0"
    ]
  },
  {
    id: "p1-math-3",
    module: "3 · Numbers & math",
    title: "Whole parts and remainders",
    concept:
      "<p>Two more operators are useful for whole numbers:</p>" +
      "<p><code>//</code> divides and keeps only the whole part. <code>%</code> gives the remainder left over.</p>" +
      "<p>Example: a song is 200 seconds long. <code>200 // 60</code> is <b>3</b> whole minutes, and <code>200 % 60</code> is the <b>20</b> leftover seconds.</p>",
    task: "<p>Print the whole minutes, then the leftover seconds, for a 200-second song — each on its own line:</p><pre>3\n20</pre>",
    starter: "seconds = 200\n# Print whole minutes (// 60), then leftover seconds (% 60)\n",
    expected: "3\n20",
    hints: [
      "Two print() lines. The first uses //, the second uses %.",
      "Whole minutes: seconds // 60. Leftover seconds: seconds % 60.",
      "print(seconds // 60) then print(seconds % 60)"
    ]
  },
  {
    id: "p1-math-4",
    module: "3 · Numbers & math",
    title: "Combining the maths",
    concept: "<p>You can chain calculations together. Python works left to right, and like in school, multiplication happens before addition.</p>",
    task: "<p>You have <code>3</code> songs. Each is <code>4</code> minutes long and was played <code>5</code> times. Store these in variables, then print the <b>total</b> minutes listened across everything (songs × minutes × plays):</p><pre>60</pre>",
    starter: "songs = 3\nminutes_each = 4\nplays_each = 5\n# Print the three multiplied together\n",
    expected: "60",
    hints: [
      "Multiply all three variables in one print().",
      "Use * between each one.",
      "print(songs * minutes_each * plays_each)"
    ]
  },

  /* ---------- Module 4 · Strings ---------- */
  {
    id: "p1-str-1",
    module: "4 · Strings",
    title: "Slotting values into text (f-strings)",
    concept:
      "<p>An <b>f-string</b> lets you drop a variable straight into text. Put an <code>f</code> before the opening quote, then wrap any variable in curly braces <code>{ }</code>.</p>" +
      "<p>Example: <code>f\"Hi {name}\"</code> becomes <code>Hi Sam</code> when name is \"Sam\".</p>",
    task: "<p>With <code>artist = \"Queen\"</code> already set, use an f-string to print exactly:</p><pre>Artist: Queen</pre>",
    starter: "artist = \"Queen\"\n# Use an f-string to print:  Artist: Queen\n",
    expected: "Artist: Queen",
    hints: [
      "Start the string with f and wrap artist in curly braces.",
      "The word \"Artist:\" is plain text; only the variable goes in braces.",
      "print(f\"Artist: {artist}\")"
    ]
  },
  {
    id: "p1-str-2",
    module: "4 · Strings",
    title: "Several values in one f-string",
    concept: "<p>An f-string can hold as many variables as you like, mixed with any text and punctuation you want.</p>",
    task: "<p>With <code>title = \"Bohemian Rhapsody\"</code> and <code>year = 1975</code>, use one f-string to print the title with the year in brackets:</p><pre>Bohemian Rhapsody (1975)</pre>",
    starter: "title = \"Bohemian Rhapsody\"\nyear = 1975\n# Print:  Bohemian Rhapsody (1975)\n",
    expected: "Bohemian Rhapsody (1975)",
    hints: [
      "Put both variables in their own curly braces, with the brackets as plain text around the year.",
      "The brackets ( and ) are just normal characters in the string.",
      "print(f\"{title} ({year})\")"
    ]
  },
  {
    id: "p1-str-3",
    module: "4 · Strings",
    title: "Changing text with methods",
    concept:
      "<p>Strings come with built-in <b>methods</b> — actions you attach with a dot. <code>.upper()</code> makes text all capitals, <code>.lower()</code> makes it all lowercase.</p>" +
      "<p>Example: <code>\"hi\".upper()</code> gives <code>HI</code>.</p>",
    task: "<p>With <code>artist = \"Queen\"</code>, print the artist's name in all capitals:</p><pre>QUEEN</pre>",
    starter: "artist = \"Queen\"\n# Print the artist in all capitals\n",
    expected: "QUEEN",
    hints: [
      "Attach .upper() to the variable.",
      "Put artist.upper() inside print().",
      "print(artist.upper())"
    ]
  },
  {
    id: "p1-str-4",
    module: "4 · Strings",
    title: "Cleaning up messy text",
    concept:
      "<p>Real data is often messy — extra spaces around words are common. <code>.strip()</code> removes spaces from both ends of a string.</p>" +
      "<p>This is your first taste of <b>data cleaning</b>, which you'll do a lot of later.</p>",
    task: "<p>The artist name arrived with extra spaces: <code>name = \"  Queen  \"</code>. Print the cleaned-up name with the spaces removed:</p><pre>Queen</pre>",
    starter: "name = \"  Queen  \"\n# Print the name with surrounding spaces removed\n",
    expected: "Queen",
    hints: [
      "Use the .strip() method on name.",
      "Put name.strip() inside print().",
      "print(name.strip())"
    ]
  },

  /* ---------- Module 5 · Data types ---------- */
  {
    id: "p1-type-1",
    module: "5 · Data types",
    title: "What type is this?",
    concept:
      "<p>Every value has a <b>type</b>. The main ones: <code>int</code> (whole number), <code>float</code> (decimal), <code>str</code> (text), and <code>bool</code> (True/False).</p>" +
      "<p><code>type(x)</code> tells you the type of <code>x</code>.</p>",
    task: "<p>Print the type of the text <code>\"Queen\"</code>. Python will report it like this:</p><pre>&lt;class 'str'&gt;</pre>",
    starter: "# Print the type of the text \"Queen\"\n",
    expected: "<class 'str'>",
    hints: [
      "Put the value inside type(), and that inside print().",
      "The value is the text \"Queen\", in quotes.",
      "print(type(\"Queen\"))"
    ]
  },
  {
    id: "p1-type-2",
    module: "5 · Data types",
    title: "Turning text into a number",
    concept:
      "<p>Numbers that arrive as <b>text</b> can't be added up — <code>\"150\" + 50</code> would be an error.</p>" +
      "<p><code>int()</code> converts text into a whole number so you can do maths with it. This is essential when reading real data, where numbers often come in as text.</p>",
    task: "<p>The play count came in as text: <code>plays_text = \"150\"</code>. Convert it to a number, add 50, and print the result:</p><pre>200</pre>",
    starter: "plays_text = \"150\"\n# Convert to a number, add 50, then print\n",
    expected: "200",
    hints: [
      "Wrap plays_text in int() to turn it into a number.",
      "Then add 50 to that.",
      "print(int(plays_text) + 50)"
    ]
  },
  {
    id: "p1-type-3",
    module: "5 · Data types",
    title: "Turning a number into text",
    concept:
      "<p>Going the other way, <code>str()</code> turns a number into text so you can join it onto other text with <code>+</code>.</p>" +
      "<p>Without it, <code>\"Year \" + 1975</code> would be an error, because you can't add text and a number directly.</p>",
    task: "<p>With <code>year = 1975</code>, join it onto some text using <code>+</code> and <code>str()</code> to print exactly:</p><pre>Released in 1975</pre>",
    starter: "year = 1975\n# Use + and str() to print:  Released in 1975\n",
    expected: "Released in 1975",
    hints: [
      "Convert year to text with str(year).",
      "Join \"Released in \" (note the space at the end) onto str(year) with +.",
      "print(\"Released in \" + str(year))"
    ]
  },

  /* ---------- Module 6 · Booleans & comparisons ---------- */
  {
    id: "p2-bool-1",
    module: "6 · Booleans",
    title: "True or false?",
    concept:
      "<p>A comparison asks a yes/no question and answers with <code>True</code> or <code>False</code> — a type called a <b>boolean</b>.</p>" +
      "<p>The comparisons are: <code>&gt;</code> greater, <code>&lt;</code> less, <code>&gt;=</code> at least, <code>&lt;=</code> at most.</p>",
    task: "<p>Print whether <code>150</code> is greater than <code>100</code>. Python answers:</p><pre>True</pre>",
    starter: "# Print whether 150 is greater than 100\n",
    expected: "True",
    hints: [
      "Use the > symbol between the two numbers, inside print().",
      "No quotes — these are numbers being compared.",
      "print(150 > 100)"
    ]
  },
  {
    id: "p2-bool-2",
    module: "6 · Booleans",
    title: "Checking if two things are equal",
    concept:
      "<p>To check whether two things are equal, use <b>two</b> equals signs <code>==</code>. (A single <code>=</code> means \"store a value\", which is different.)</p>" +
      "<p><code>!=</code> means \"not equal\".</p>",
    task: "<p>With <code>artist = \"Queen\"</code>, print whether the artist is equal to <code>\"Queen\"</code>:</p><pre>True</pre>",
    starter: "artist = \"Queen\"\n# Print whether artist equals \"Queen\"\n",
    expected: "True",
    hints: [
      "Use == (two equals signs) to compare.",
      "Compare the variable artist with the text \"Queen\".",
      "print(artist == \"Queen\")"
    ]
  },
  {
    id: "p2-bool-3",
    module: "6 · Booleans",
    title: "Combining conditions with and / or",
    concept:
      "<p><code>and</code> is True only when <b>both</b> sides are true. <code>or</code> is True when <b>either</b> side is true.</p>" +
      "<p>This lets you ask richer questions, like \"is this number between two others?\"</p>",
    task: "<p>With <code>plays = 150</code>, print whether plays is both greater than 100 <b>and</b> less than 200:</p><pre>True</pre>",
    starter: "plays = 150\n# Print whether plays > 100 AND plays < 200\n",
    expected: "True",
    hints: [
      "Write two comparisons joined by the word and.",
      "plays > 100 and plays < 200",
      "print(plays > 100 and plays < 200)"
    ]
  },
  {
    id: "p2-bool-4",
    module: "6 · Booleans",
    title: "Flipping with not",
    concept:
      "<p><code>not</code> flips a boolean: <code>not True</code> becomes <code>False</code>, and <code>not False</code> becomes <code>True</code>.</p>" +
      "<p>It's handy for yes/no flags, like whether a track is explicit.</p>",
    task: "<p>A track is marked <code>explicit = False</code>. Print whether it is <b>not</b> explicit (i.e. clean):</p><pre>True</pre>",
    starter: "explicit = False\n# Print whether the track is NOT explicit\n",
    expected: "True",
    hints: [
      "Put the word not in front of the variable.",
      "not explicit",
      "print(not explicit)"
    ]
  },

  /* ---------- Module 7 · If / elif / else ---------- */
  {
    id: "p2-if-1",
    module: "7 · If / elif / else",
    title: "Doing something only if...",
    concept:
      "<p>An <code>if</code> statement runs code only when a condition is true.</p>" +
      "<p>The line ends with a colon <code>:</code>, and the code to run is <b>indented</b> underneath (4 spaces). Indentation is how Python knows what belongs to the if.</p>",
    task: "<p>With <code>plays = 150</code>, print <code>Popular</code> only if plays is greater than 100:</p><pre>Popular</pre>",
    starter: "plays = 150\n# If plays is over 100, print \"Popular\"\n",
    expected: "Popular",
    hints: [
      "Write: if plays > 100:  and end the line with a colon.",
      "On the next line, indented by 4 spaces, put the print.",
      "if plays > 100:\n    print(\"Popular\")"
    ]
  },
  {
    id: "p2-if-2",
    module: "7 · If / elif / else",
    title: "Otherwise... (else)",
    concept:
      "<p><code>else</code> gives a fallback that runs when the <code>if</code> condition is false. Together they always do exactly one of the two.</p>",
    task: "<p>With <code>plays = 80</code>, print <code>Popular</code> if plays is over 100, <b>otherwise</b> print <code>Niche</code>:</p><pre>Niche</pre>",
    starter: "plays = 80\n# Print \"Popular\" if over 100, otherwise \"Niche\"\n",
    expected: "Niche",
    hints: [
      "Start with the if (over 100 -> Popular), then add an else: line.",
      "else: has no condition, and its code is indented too.",
      "if plays > 100:\n    print(\"Popular\")\nelse:\n    print(\"Niche\")"
    ]
  },
  {
    id: "p2-if-3",
    module: "7 · If / elif / else",
    title: "More than two paths (elif)",
    concept:
      "<p><code>elif</code> (\"else if\") adds extra paths between <code>if</code> and <code>else</code>. Python checks them top to bottom and runs the <b>first</b> one that's true.</p>",
    task: "<p>Sort a song by popularity. With <code>plays = 500</code>: print <code>Hit</code> if over 1000, else <code>Popular</code> if over 100, else <code>Niche</code>. For 500 the answer is:</p><pre>Popular</pre>",
    starter: "plays = 500\n# Hit if > 1000, Popular if > 100, otherwise Niche\n",
    expected: "Popular",
    hints: [
      "Three branches: if plays > 1000, elif plays > 100, else.",
      "Order matters — check the biggest threshold first.",
      "if plays > 1000:\n    print(\"Hit\")\nelif plays > 100:\n    print(\"Popular\")\nelse:\n    print(\"Niche\")"
    ]
  },
  {
    id: "p2-if-4",
    module: "7 · If / elif / else",
    title: "Conditions that combine ideas",
    concept: "<p>The real power comes from putting booleans inside an <code>if</code>. You can require several things at once with <code>and</code>, <code>or</code>, and <code>not</code>.</p>",
    task: "<p>A song should be featured only if it's popular <b>and</b> clean. With <code>plays = 150</code> and <code>explicit = False</code>, print <code>Featured</code> if plays is over 100 and the track is not explicit, otherwise print <code>Skip</code>:</p><pre>Featured</pre>",
    starter: "plays = 150\nexplicit = False\n# Featured if plays > 100 AND not explicit, else Skip\n",
    expected: "Featured",
    hints: [
      "The condition combines two checks with and: plays > 100 and not explicit.",
      "Put that whole thing after if, ending with a colon.",
      "if plays > 100 and not explicit:\n    print(\"Featured\")\nelse:\n    print(\"Skip\")"
    ]
  }

];
