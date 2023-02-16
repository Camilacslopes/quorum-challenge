**1. Discuss your solution’s time complexity. What tradeoffs did you make?**
 - Basically I mapped the data, I iterated over the id of legilators and bills, and to get to the final result I iterated over the result of bills and each vote intention, as I had to iterate one result inside the other we concluded that the complexity was O(n^2).

**2. How would you change your solution to account for future columns that might be requested, such as “Bill Voted On Date” or“Co-Sponsors”?**
  - I created the files in a very separate and semantical way precisely thinking about the scalability of the project.

**3. How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?**
  - It would not be necessary to process the csv as I did obviously, I would use another flow for the data treatment in a faster way, maybe just use the output file and convert to json, for example.

**4. How long did you spend working on the assignment?**
  - I spent about two hours coding, and within those hours I had a 20-minute break.
