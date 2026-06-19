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
  },

  /* ---------- Module 8 · Lists ---------- */
  {
    id: "p2-list-1",
    module: "8 · Lists",
    title: "A list holds many values",
    concept:
      "<p>Until now a variable held one value. A <b>list</b> holds many, in order, inside square brackets <code>[ ]</code>, separated by commas.</p>" +
      "<p>Printing a whole list shows it with its brackets and quotes.</p>",
    task: "<p>Make a list called <code>songs</code> containing <code>\"Bohemian Rhapsody\"</code> and <code>\"We Will Rock You\"</code>, then print the whole list:</p><pre>['Bohemian Rhapsody', 'We Will Rock You']</pre>",
    starter: "# Make a list of two songs, then print the list\nsongs = \n",
    expected: "['Bohemian Rhapsody', 'We Will Rock You']",
    hints: [
      "Put both titles inside square brackets, separated by a comma. Each title needs quotes.",
      "songs = [\"Bohemian Rhapsody\", \"We Will Rock You\"]",
      "Then on the next line: print(songs)"
    ]
  },
  {
    id: "p2-list-2",
    module: "8 · Lists",
    title: "Getting one item out",
    concept:
      "<p>Each item has a position number called an <b>index</b>. Counting starts at <b>0</b>, so the first item is <code>songs[0]</code>, the second is <code>songs[1]</code>, and so on.</p>",
    task: "<p>From the list below, print just the <b>first</b> song:</p><pre>Bohemian Rhapsody</pre>",
    starter: "songs = [\"Bohemian Rhapsody\", \"We Will Rock You\"]\n# Print the first song (remember: counting starts at 0)\n",
    expected: "Bohemian Rhapsody",
    hints: [
      "Use square brackets with the index number after the list name.",
      "The first item is at index 0, not 1.",
      "print(songs[0])"
    ]
  },
  {
    id: "p2-list-3",
    module: "8 · Lists",
    title: "How many items?",
    concept: "<p><code>len()</code> counts how many items are in a list — useful for \"how many songs do I have?\"</p>",
    task: "<p>Print how many songs are in this list:</p><pre>3</pre>",
    starter: "songs = [\"Bohemian Rhapsody\", \"We Will Rock You\", \"Somebody to Love\"]\n# Print how many songs are in the list\n",
    expected: "3",
    hints: [
      "Wrap the list in len().",
      "Put len(songs) inside print().",
      "print(len(songs))"
    ]
  },
  {
    id: "p2-list-4",
    module: "8 · Lists",
    title: "Adding to a list",
    concept:
      "<p><code>.append()</code> adds a new item to the end of a list. The list grows by one.</p>" +
      "<p>After adding a third song, its index is <code>2</code> (because counting started at 0).</p>",
    task: "<p>Add <code>\"Somebody to Love\"</code> to the list, then print the item at index 2 to confirm it landed:</p><pre>Somebody to Love</pre>",
    starter: "songs = [\"Bohemian Rhapsody\", \"We Will Rock You\"]\n# Append a third song, then print songs[2]\n",
    expected: "Somebody to Love",
    hints: [
      "Use songs.append(\"...\") to add the new title.",
      "Then print the item at index 2.",
      "songs.append(\"Somebody to Love\")\nprint(songs[2])"
    ]
  },

  /* ---------- Module 9 · For-loops ---------- */
  {
    id: "p2-for-1",
    module: "9 · For-loops",
    title: "Doing something to every item",
    concept:
      "<p>A <code>for</code> loop runs the same code once for each item in a list. The pattern is <code>for item in list:</code>, with the repeated code indented underneath.</p>" +
      "<p>The name after <code>for</code> (here, <code>song</code>) holds each item in turn.</p>",
    task: "<p>Loop through the list and print every song, one per line:</p><pre>Bohemian Rhapsody\nWe Will Rock You\nSomebody to Love</pre>",
    starter: "songs = [\"Bohemian Rhapsody\", \"We Will Rock You\", \"Somebody to Love\"]\n# Loop through songs and print each one\n",
    expected: "Bohemian Rhapsody\nWe Will Rock You\nSomebody to Love",
    hints: [
      "Write: for song in songs:  ending with a colon.",
      "Indent the print 4 spaces underneath.",
      "for song in songs:\n    print(song)"
    ]
  },
  {
    id: "p2-for-2",
    module: "9 · For-loops",
    title: "Looping over a range of numbers",
    concept:
      "<p><code>range(1, 4)</code> produces the numbers 1, 2, 3 — it stops <b>before</b> the second number. Looping over a range lets you repeat something a set number of times.</p>",
    task: "<p>Use a for-loop with <code>range</code> to print:</p><pre>1\n2\n3</pre>",
    starter: "# Loop over range(1, 4) and print each number\n",
    expected: "1\n2\n3",
    hints: [
      "Write: for n in range(1, 4):  — note it stops before 4.",
      "Indent the print underneath.",
      "for n in range(1, 4):\n    print(n)"
    ]
  },
  {
    id: "p2-for-3",
    module: "9 · For-loops",
    title: "Adding things up in a loop",
    concept:
      "<p>A common pattern: start a total at 0, then add to it on each pass of the loop. By the end, the total holds the sum of everything.</p>" +
      "<p>This combines the loop with the \"update a variable\" idea from earlier.</p>",
    task: "<p>Add up all the play counts and print the total:</p><pre>350</pre>",
    starter: "plays_list = [100, 50, 200]\ntotal = 0\n# Loop through plays_list, adding each to total, then print total\n",
    expected: "350",
    hints: [
      "Inside the loop, set total to itself plus the current value.",
      "for p in plays_list:  then indented:  total = total + p",
      "After the loop (not indented), print(total). It should be 350."
    ]
  },
  {
    id: "p2-for-4",
    module: "9 · For-loops",
    title: "Looping with a decision inside",
    concept: "<p>Put an <code>if</code> inside a loop to act on only <b>some</b> items. The if is indented inside the loop, and its own code is indented again — two levels.</p>",
    task: "<p>Loop through the play counts and print only the ones that are 100 or more:</p><pre>100\n200</pre>",
    starter: "plays_list = [100, 50, 200]\n# Print only the counts that are 100 or more\n",
    expected: "100\n200",
    hints: [
      "for p in plays_list:  then inside it,  if p >= 100:",
      "The print is indented twice — it sits inside the if, which sits inside the loop.",
      "for p in plays_list:\n    if p >= 100:\n        print(p)"
    ]
  },
  {
    id: "p2-for-5",
    module: "9 · For-loops",
    title: "Counting matches",
    concept: "<p>Combine the counter pattern with a filter: start a count at 0, loop through, and add 1 only when an item passes the test. This answers questions like \"how many songs are popular?\"</p>",
    task: "<p>Count how many play counts are 100 or more, and print the count:</p><pre>2</pre>",
    starter: "plays_list = [100, 50, 200]\ncount = 0\n# Add 1 to count for each value that is 100 or more, then print count\n",
    expected: "2",
    hints: [
      "Loop through, and inside an if (value >= 100), add 1 to count.",
      "count = count + 1  goes inside the if.",
      "for p in plays_list:\n    if p >= 100:\n        count = count + 1\nprint(count)"
    ]
  },

  /* ---------- Module 10 · While-loops ---------- */
  {
    id: "p2-while-1",
    module: "10 · While-loops",
    title: "Repeat while something is true",
    concept:
      "<p>A <code>while</code> loop repeats as long as its condition stays true. <b>Crucial:</b> something inside the loop must eventually make the condition false, or it runs forever.</p>" +
      "<p>Here, increasing <code>n</code> each time is what eventually stops it.</p>",
    task: "<p>Start with <code>n = 1</code>. While <code>n</code> is 3 or less, print <code>n</code> and then add 1 to it. The output:</p><pre>1\n2\n3</pre>",
    starter: "n = 1\n# While n is 3 or less: print n, then add 1 to n\n",
    expected: "1\n2\n3",
    hints: [
      "Write: while n <= 3:  ending with a colon.",
      "Inside the loop (indented): print(n), then on the next line n = n + 1.",
      "while n <= 3:\n    print(n)\n    n = n + 1"
    ]
  },
  {
    id: "p2-while-2",
    module: "10 · While-loops",
    title: "Counting down",
    concept: "<p>A while-loop can count downward just as easily — change the variable in the other direction and flip the comparison.</p>",
    task: "<p>Start with <code>n = 3</code>. While <code>n</code> is greater than 0, print <code>n</code> and then subtract 1. The output:</p><pre>3\n2\n1</pre>",
    starter: "n = 3\n# While n is greater than 0: print n, then subtract 1\n",
    expected: "3\n2\n1",
    hints: [
      "Condition: while n > 0:",
      "Inside: print(n), then n = n - 1.",
      "while n > 0:\n    print(n)\n    n = n - 1"
    ]
  },
  {
    id: "p2-while-3",
    module: "10 · While-loops",
    title: "Repeat until you reach a target",
    concept: "<p>While-loops shine when you don't know the number of steps in advance — only the stopping condition. Keep going until a running total crosses a line.</p>",
    task: "<p>You add 100 plays at a time. Starting from a total of 0, keep adding 100 while the total is still under 250, counting how many times you add. Print the count:</p><pre>3</pre>",
    starter: "total = 0\ncount = 0\n# While total < 250: add 100 to total, add 1 to count\n",
    expected: "3",
    hints: [
      "Condition: while total < 250:",
      "Inside the loop add 100 to total and 1 to count.",
      "while total < 250:\n    total = total + 100\n    count = count + 1\nprint(count)"
    ]
  },
  {
    id: "p2-while-4",
    module: "10 · While-loops",
    title: "Walking through a list by index",
    concept: "<p>You can use a while-loop to step through a list with an index, stopping when the index reaches the list's length. (A for-loop is usually simpler — but this shows how the pieces connect.)</p>",
    task: "<p>Use a while-loop with an index <code>i</code> to print every song in the list, one per line:</p><pre>Bohemian Rhapsody\nWe Will Rock You\nSomebody to Love</pre>",
    starter: "songs = [\"Bohemian Rhapsody\", \"We Will Rock You\", \"Somebody to Love\"]\ni = 0\n# While i is less than the number of songs: print songs[i], then add 1 to i\n",
    expected: "Bohemian Rhapsody\nWe Will Rock You\nSomebody to Love",
    hints: [
      "Condition: while i < len(songs):",
      "Inside: print(songs[i]), then i = i + 1.",
      "while i < len(songs):\n    print(songs[i])\n    i = i + 1"
    ]
  },

  /* ---------- Module 11 · Dictionaries ---------- */
  {
    id: "p2-dict-1",
    module: "11 · Dictionaries",
    title: "Labeled data",
    concept:
      "<p>A <b>dictionary</b> stores values under labels (called <b>keys</b>) instead of positions. You write it with curly braces and <code>key: value</code> pairs.</p>" +
      "<p>You read a value by its key: <code>song[\"title\"]</code>.</p>",
    task: "<p>A song is stored below. Print the value under the key <code>\"title\"</code>:</p><pre>Bohemian Rhapsody</pre>",
    starter: "song = {\"title\": \"Bohemian Rhapsody\", \"plays\": 150}\n# Print the title\n",
    expected: "Bohemian Rhapsody",
    hints: [
      "Use square brackets with the key name in quotes.",
      "song[\"title\"] gives the value stored under that key.",
      "print(song[\"title\"])"
    ]
  },
  {
    id: "p2-dict-2",
    module: "11 · Dictionaries",
    title: "Reading any value by its key",
    concept: "<p>The same square-bracket lookup works for every key. Numbers stored in a dictionary come back as real numbers, ready for maths.</p>",
    task: "<p>From the same song, print the number of plays:</p><pre>150</pre>",
    starter: "song = {\"title\": \"Bohemian Rhapsody\", \"plays\": 150}\n# Print the plays\n",
    expected: "150",
    hints: [
      "Use the key \"plays\" in square brackets.",
      "print(song[\"plays\"])",
      "No quotes around the result — plays is stored as a number."
    ]
  },
  {
    id: "p2-dict-3",
    module: "11 · Dictionaries",
    title: "Adding a new label",
    concept: "<p>Assigning to a key that doesn't exist yet <b>adds</b> it. <code>song[\"year\"] = 1975</code> creates a new year entry.</p>",
    task: "<p>Add a <code>\"year\"</code> of <code>1975</code> to the song, then print it back:</p><pre>1975</pre>",
    starter: "song = {\"title\": \"Bohemian Rhapsody\", \"plays\": 150}\n# Add a \"year\" of 1975, then print song[\"year\"]\n",
    expected: "1975",
    hints: [
      "Assign to a new key: song[\"year\"] = 1975",
      "Then read it back with print(song[\"year\"]).",
      "song[\"year\"] = 1975\nprint(song[\"year\"])"
    ]
  },
  {
    id: "p2-dict-4",
    module: "11 · Dictionaries",
    title: "Looping through a dictionary",
    concept:
      "<p>A dictionary is perfect for pairing things — like each song title with its play count. <code>.items()</code> lets a for-loop walk through both the key and value together.</p>" +
      "<p>This is the shape your real music data will take in the next phase.</p>",
    task: "<p>Loop through the library and print each title and its plays, formatted like below (use an f-string with a colon and space):</p><pre>Bohemian Rhapsody: 150\nWe Will Rock You: 200</pre>",
    starter: "library = {\"Bohemian Rhapsody\": 150, \"We Will Rock You\": 200}\n# Loop with .items() and print  title: plays  for each\n",
    expected: "Bohemian Rhapsody: 150\nWe Will Rock You: 200",
    hints: [
      "Use: for title, plays in library.items():",
      "Inside, print an f-string: f\"{title}: {plays}\"",
      "for title, plays in library.items():\n    print(f\"{title}: {plays}\")"
    ]
  },

  /* ---------- Module 12 · Functions ---------- */
  {
    id: "p2-func-1",
    module: "12 · Functions",
    title: "Making your own command",
    concept:
      "<p>A <b>function</b> is a named block of code you can run whenever you like. You define it with <code>def</code>, a name, brackets, and a colon — then indent the code inside.</p>" +
      "<p>Defining it doesn't run it. You run it by <b>calling</b> its name with brackets: <code>greet()</code>.</p>",
    task: "<p>Define a function called <code>greet</code> that prints <code>Hello</code>, then call it. The output:</p><pre>Hello</pre>",
    starter: "# Define greet() to print Hello, then call it\n",
    expected: "Hello",
    hints: [
      "Define with: def greet():  and indent the print underneath.",
      "After the function, on a line with no indent, call it: greet()",
      "def greet():\n    print(\"Hello\")\ngreet()"
    ]
  },
  {
    id: "p2-func-2",
    module: "12 · Functions",
    title: "Passing information in",
    concept:
      "<p>A function can take <b>information</b> through its brackets, called a <b>parameter</b>. Inside the function, that parameter behaves like a variable.</p>" +
      "<p>You supply a value when you call it: <code>announce(\"...\")</code>.</p>",
    task: "<p>Define <code>announce(title)</code> that prints <code>Now playing: </code> followed by the title, then call it with <code>\"Bohemian Rhapsody\"</code>:</p><pre>Now playing: Bohemian Rhapsody</pre>",
    starter: "# Define announce(title), then call it with \"Bohemian Rhapsody\"\n",
    expected: "Now playing: Bohemian Rhapsody",
    hints: [
      "def announce(title):  then inside, print an f-string using {title}.",
      "Call it with the title in quotes: announce(\"Bohemian Rhapsody\").",
      "def announce(title):\n    print(f\"Now playing: {title}\")\nannounce(\"Bohemian Rhapsody\")"
    ]
  },
  {
    id: "p2-func-3",
    module: "12 · Functions",
    title: "Getting an answer back",
    concept:
      "<p><code>return</code> sends a value <b>back</b> from a function, so you can use the result elsewhere. This is different from <code>print()</code>, which only shows it.</p>" +
      "<p>A function can take several parameters, separated by commas.</p>",
    task: "<p>Define <code>total_minutes(tracks, minutes)</code> that <b>returns</b> tracks × minutes. Then print the result for 12 tracks of 3 minutes:</p><pre>36</pre>",
    starter: "# Define total_minutes(tracks, minutes) that returns their product\n# Then print total_minutes(12, 3)\n",
    expected: "36",
    hints: [
      "Inside the function use return, not print: return tracks * minutes.",
      "Then print the call: print(total_minutes(12, 3)).",
      "def total_minutes(tracks, minutes):\n    return tracks * minutes\nprint(total_minutes(12, 3))"
    ]
  },
  {
    id: "p2-func-4",
    module: "12 · Functions",
    title: "A function that works on a list",
    concept: "<p>Functions and loops combine well: pass a whole list in, loop over it inside, and return a single answer. This packages up a reusable calculation.</p>",
    task: "<p>Define <code>total_plays(plays_list)</code> that adds up all the numbers in the list and returns the total. Print the total for <code>[100, 50, 200]</code>:</p><pre>350</pre>",
    starter: "# Define total_plays(plays_list): loop, sum, return the total\n# Then print total_plays([100, 50, 200])\n",
    expected: "350",
    hints: [
      "Start total at 0 inside the function, loop adding each value, then return total.",
      "Remember the return line sits at the function level, after the loop.",
      "def total_plays(plays_list):\n    total = 0\n    for p in plays_list:\n        total = total + p\n    return total\nprint(total_plays([100, 50, 200]))"
    ]
  },

  /* ---------- Module 13 · Mini-project ---------- */
  {
    id: "p2-proj-1",
    module: "13 · Mini-project",
    title: "Your music library, listed",
    concept:
      "<p>Now everything comes together. Real data is often a <b>list of dictionaries</b> — many records, each with labeled fields. Here each song is a dictionary, and the library is a list of them.</p>" +
      "<p>Loop the list, and for each song read its fields by key.</p>",
    task: "<p>Loop through the library and print each song as <code>title: plays</code>:</p><pre>Bohemian Rhapsody: 150\nWe Will Rock You: 200\nUnder Pressure: 80</pre>",
    starter: "library = [\n    {\"title\": \"Bohemian Rhapsody\", \"plays\": 150},\n    {\"title\": \"We Will Rock You\", \"plays\": 200},\n    {\"title\": \"Under Pressure\", \"plays\": 80},\n]\n# Loop through library; print each as  title: plays\n",
    expected: "Bohemian Rhapsody: 150\nWe Will Rock You: 200\nUnder Pressure: 80",
    hints: [
      "for song in library:  — each song is a dictionary.",
      "Read fields with song[\"title\"] and song[\"plays\"], inside an f-string.",
      "for song in library:\n    print(f\"{song['title']}: {song['plays']}\")"
    ]
  },
  {
    id: "p2-proj-2",
    module: "13 · Mini-project",
    title: "Filtering the popular ones",
    concept: "<p>Add a decision inside the loop to act on only some records — the same filtering you'll do on real datasets, done by hand here so you understand what's happening underneath.</p>",
    task: "<p>Loop the library and print the <b>title</b> of every song with 100 or more plays:</p><pre>Bohemian Rhapsody\nWe Will Rock You</pre>",
    starter: "library = [\n    {\"title\": \"Bohemian Rhapsody\", \"plays\": 150},\n    {\"title\": \"We Will Rock You\", \"plays\": 200},\n    {\"title\": \"Under Pressure\", \"plays\": 80},\n]\n# Print the title of each song with plays of 100 or more\n",
    expected: "Bohemian Rhapsody\nWe Will Rock You",
    hints: [
      "Inside the loop, add: if song[\"plays\"] >= 100:",
      "Then print song[\"title\"], indented inside the if.",
      "for song in library:\n    if song[\"plays\"] >= 100:\n        print(song[\"title\"])"
    ]
  },
  {
    id: "p2-proj-3",
    module: "13 · Mini-project",
    title: "Totalling it up with a function",
    concept:
      "<p>Finish by packaging an analysis into a reusable function: pass in the whole library, loop the records, and return the grand total of plays.</p>" +
      "<p>This exact operation — summing a column across many records — is what pandas will do for you in one line next phase. Now you know what it's really doing.</p>",
    task: "<p>Define <code>total_plays(library)</code> that adds up the <code>plays</code> of every song and returns it. Print the total:</p><pre>430</pre>",
    starter: "library = [\n    {\"title\": \"Bohemian Rhapsody\", \"plays\": 150},\n    {\"title\": \"We Will Rock You\", \"plays\": 200},\n    {\"title\": \"Under Pressure\", \"plays\": 80},\n]\n# Define total_plays(library): sum every song's plays, return it\n# Then print total_plays(library)\n",
    expected: "430",
    hints: [
      "Inside the function, start total at 0, loop the library, add song[\"plays\"] each time.",
      "Return total after the loop, then print the call.",
      "def total_plays(library):\n    total = 0\n    for song in library:\n        total = total + song[\"plays\"]\n    return total\nprint(total_plays(library))"
    ]
  }

];
