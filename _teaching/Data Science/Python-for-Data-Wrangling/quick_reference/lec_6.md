---
title: Programming And Automation
layout: page
permalink: /teaching/Data Science/Python-for-Data-Wrangling/quick_reference/lec_6/
hide_title: true
parent: Python-for-Data-Wrangling
grand_parent: Data Science
---

<h1 align="center"> 6. Programming And Automation</h1>

<!-- # 📘 Python Session-6 Programming And Automation -->

## 1️⃣ SYSTEM DEFINED FUNCTIONS vs USER DEFINED FUNCTIONS

### 📊 System Defined (Built-in) Functions
Use pandas to compute:
```python
df['total'] = df[months].sum(axis=1)
df['avg']   = df[months].mean(axis=1)
df['min']   = df[months].min(axis=1)
df['max']   = df[months].max(axis=1)
````


### 🛠️ User-Defined Functions in Python

- A **function** is a block of reusable code that performs a specific task.    
- User-defined functions are created with the **`def` keyword**.    
- General syntax:
    

```python
def function_name(parameters):
    # code block
    return value
```


### ✅ Examples

```python
# Example 1: Function without parameters
def greet():
    return "Hello, World!"

print(greet())
# Output: Hello, World!
```

```python
# Example 2: Function with parameters
def add(a, b):
    return a + b

print(add(5, 3))
# Output: 8
```

```python
# Example 3: Function with default parameter
def power(base, exp=2):
    return base ** exp

print(power(4))      # uses default exponent 2 → 16
print(power(2, 3))   # uses given exponent 3 → 8
```

```python
# Example 4: Function returning multiple values
def stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

print(stats([10, 20, 30, 40]))
# Output: (10, 40, 25.0)
```

---

👉 A few more.....

```python
from statistics import mean, stdev

def sum_all(row): return sum(row[months])
def mean_all(row): return mean(row[months])
def min_all(row): return min(row[months])
def max_all(row): return max(row[months])
def std_all(row): return stdev(row[months])

df['total'] = df.apply(sum_all, axis=1)
df['avg']   = df.apply(mean_all, axis=1)
df['std']   = df.apply(std_all, axis=1)
```



## 2️⃣ Lambda Functions in Python

- A **lambda function** is a **small, anonymous function** defined without using the `def` keyword.    
- It can take **any number of arguments** but can only have **one expression**.    
- General syntax:    

```python
lambda arguments: expression
```

- The expression is automatically **returned**.    

---

### ✅ Examples

```python
# Example 1: Simple addition
add = lambda x, y: x + y
print(add(5, 3))
# Output: 8
```

```python
# Example 2: Square of a number
square = lambda n: n ** 2
print(square(4))
# Output: 16
```

```python
# Example 3: Using in sorting (sort by second element)
pairs = [(1, 'b'), (2, 'a'), (3, 'c')]
pairs.sort(key=lambda x: x[1])
print(pairs)
# Output: [(2, 'a'), (1, 'b'), (3, 'c')]
```

```python
# Example 4: Using with map()
nums = [1, 2, 3, 4]
doubles = list(map(lambda x: x*2, nums))
print(doubles)
# Output: [2, 4, 6, 8]
```

```python
# Example 5: Using with filter()
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)
# Output: [2, 4, 6]
```

```python
# Example 6: Using with reduce()
from functools import reduce
nums = [1, 2, 3, 4]
product = reduce(lambda x, y: x * y, nums)
print(product)
# Output: 24
```


## 📝 Key Points About Lambda Functions

- ✅ **Anonymous** → doesn’t need a name unless assigned to a variable.    
- ✅ **Single Expression Only** → can’t contain multiple statements.    
- ✅ Often used with **map(), filter(), reduce(), sort()**.    
- ⚠️ **Not a replacement** for normal functions — only for **short, throwaway functions**.    
* One-line, anonymous function for quick logic

```python
df['QTR1'] = df[['Jan','Feb','Mar']].sum(axis=1)
df['RESULT'] = df['QTR1'].apply(lambda x: 'PASS' if x >= 300 else 'FAIL')
```

## 🔄 Normal Function vs Lambda Function

|Feature|**Normal Function (`def`)**|**Lambda Function (`lambda`)**|
|---|---|---|
|**Definition**|Defined using the `def` keyword|Defined using the `lambda` keyword|
|**Name**|Usually has a function name|Anonymous (can be assigned to a variable)|
|**Syntax**|Can span multiple lines|Must be a single expression|
|**Statements Allowed**|Can include multiple statements, loops, and docstrings|Only one expression (no statements, no loops)|
|**Return**|Requires explicit `return` statement|Expression is returned implicitly|
|**Readability**|More readable for complex logic|Best for short, throwaway functions|
|**Use Cases**|General-purpose functions|Short utilities (often with `map`, `filter`, `reduce`, `sort`)|
|**Example**|`def add(x, y): return x + y`|`lambda x, y: x + y`|

## 3️⃣ GLOBAL vs LOCAL VARIABLES

- **Local Variable**    
    - Declared **inside a function**.        
    - Exists only while the function is running.        
    - Not accessible outside the function.        
- **Global Variable**    
    - Declared **outside all functions**.        
    - Accessible anywhere in the code (inside and outside functions).        
    - If modified inside a function, you must use the `global` keyword.        

---

### ✅ Example 1: Local Variable

```python
def my_func():
    x = 10   # local variable
    print("Inside function:", x)

my_func()
# print(x)  # ❌ Error: x is not defined (local to function)
```

---

### ✅ Example 2: Global Variable

```python
y = 50  # global variable

def show_global():
    print("Inside function:", y)  # accessible here

show_global()
print("Outside function:", y)      # accessible here too
```

---

### ✅ Example 3: Modifying Global Variable inside Function

```python
z = 100  # global variable

def modify_global():
    global z     # declare to modify global variable
    z = z + 50   # modifies the global variable
    print("Inside function:", z)

modify_global()
print("Outside function:", z)  # reflects the change
```

---

## 📝 Key Points

- ✅ Local variables are created **inside a function** and destroyed when it ends.    
- ✅ Global variables live **for the entire program execution**.    
- ⚠️ To **modify** a global variable inside a function, you must declare it with `global`.    
- ⚠️ Best practice: minimize globals to avoid confusion; prefer passing variables as parameters.    

### 🔁 Example

```python
x = 10  # global
def func():
    x = 5  # local
    return x
```

---

## 4️⃣ RANKING METHODS

- **RANK()**    
    - Assigns ranks to rows **with gaps** if there are ties.        
    - If two rows have the same value, they get the same rank, but the next rank is **skipped**.        
- **DENSE_RANK()**    
    - Assigns ranks to rows **without gaps**.        
    - If two rows have the same value, they get the same rank, and the next rank is **immediately consecutive**.       

### ✅ Example Dataset

|Student|Marks|
|---|---|
|A|95|
|B|90|
|C|90|
|D|85|

---

### 🔹 RANK() Output

|Student|Marks|Rank|
|---|---|---|
|A|95|1|
|B|90|2|
|C|90|2|
|D|85|4|

👉 Notice how rank **3 is skipped** because two students share rank 2.

---

### 🔹 DENSE_RANK() Output

|Student|Marks|Dense_Rank|
|---|---|---|
|A|95|1|
|B|90|2|
|C|90|2|
|D|85|3|

👉 Here, ranks are **consecutive** (no gaps).

### 📝 Key Difference

- **RANK()** → Skips numbers after ties.    
- **DENSE_RANK()** → No skipping, always consecutive.    
### 📊 Rank vs Dense Rank

```python
df['rank'] = df['sales'].rank(method='min', ascending=False)
df['dense_rank'] = df['sales'].rank(method='dense', ascending=False)
```

* Rank can skip numbers; Dense rank does not.

---

## 5️⃣ ROW LEVEL AGGREGATION (Partition-Like)

### 📊 Row-Level Aggregation

- **Definition**:  
    Row-level aggregation means performing operations **across columns within the same row**, rather than aggregating across multiple rows.
    
    - Focus = **horizontal calculation** (row-wise).        
    - Example: finding the **sum, mean, max, or min** of values across several columns for each row.    
### ✅ Example Dataset

|Student|Math|Science|English|
|---|---|---|---|
|A|85|90|88|
|B|78|82|80|
|C|92|88|95|

---

### 🔹 Row-Level Aggregation in Pandas

```python
import pandas as pd

# Sample DataFrame
df = pd.DataFrame({
    'Student': ['A','B','C'],
    'Math': [85, 78, 92],
    'Science': [90, 82, 88],
    'English': [88, 80, 95]
})

# Row-wise sum across subjects
df['Total'] = df[['Math','Science','English']].sum(axis=1)

# Row-wise average across subjects
df['Average'] = df[['Math','Science','English']].mean(axis=1)

# Row-wise max across subjects
df['Max'] = df[['Math','Science','English']].max(axis=1)

print(df)
```

---

### 📊 Result

|Student|Math|Science|English|Total|Average|Max|
|---|---|---|---|---|---|---|
|A|85|90|88|263|87.67|90|
|B|78|82|80|240|80.00|82|
|C|92|88|95|275|91.67|95|

---

## 📝 Key Points

- ✅ Row-level aggregation works **horizontally across columns**.    
- ✅ Use `axis=1` in Pandas functions (`sum`, `mean`, `max`, `min`).    
- ✅ Useful for **student scores, financial records, survey responses**, etc.
    

### SQL-style group-wise metrics

```python
df['city_total'] = df.groupby('CITY')['SALES'].transform('sum')
df['city_avg']   = df.groupby('CITY')['SALES'].transform('mean')
df['city_min']   = df.groupby('CITY')['SALES'].transform('min')
df['city_max']   = df.groupby('CITY')['SALES'].transform('max')
```

### 📊`.apply()`, `.map()`, and `.transform()`.


## 📊  Sample Dataset

**Original DataFrame** 

| |A|B|
|---|---|---|
|0|1|10|
|1|2|20|
|2|3|30|
|3|4|40|

---

## 🔹 `.map()`

- Works on a **Series only** (1D).    
- Applies a function **element-wise**.    
- Cannot directly work on the entire DataFrame.    

```python
# Square values in column A
df['A_map'] = df['A'].map(lambda x: x**2)
print(df[['A','A_map']])
```

**Output**

| |A|A_map|
|---|---|---|
|0|1|1|
|1|2|4|
|2|3|9|
|3|4|16|

---

## 🔹 `.apply()`

- Works on both **Series (1D)** and **DataFrame (2D)**.    
- On a **Series** → element-wise (like `.map()`).    
- On a **DataFrame** → applies function row-wise or column-wise (`axis=0/1`).    

```python
# Apply function on whole DataFrame column-wise
df_apply = df[['A','B']].apply(lambda x: x**2)
print(df_apply)
```

**Output**

| |A|B|
|---|---|---|
|0|1|100|
|1|4|400|
|2|9|900|
|3|16|1600|

---

## 🔹 `.transform()`

- Similar to `.apply()` but **must return the same shape** as input.    
- Often used in **groupby operations** to broadcast results.    
- Keeps the same index, useful for row-level transformations.    

```python
# Transform column B by doubling values
df['B_trans'] = df['B'].transform(lambda x: x*2)
print(df[['B','B_trans']])
```

**Output**

| |B|B_trans|
|---|---|---|
|0|10|20|
|1|20|40|
|2|30|60|
|3|40|80|

---

## 📝 Summary

|Method|Works On|Output Shape|Usage Example|
|---|---|---|---|
|**map()**|Series only|Same as input|Element-wise function (`Series.map(f)`)|
|**apply()**|Series & DataFrame|Flexible (scalar, Series, DataFrame)|Row/col-wise or element-wise operations|
|**transform()**|Series & DataFrame|Must return same shape as input|Broadcasting transformations, especially in groupby|

---

👍 Let’s use a **groupby example** — this is where the difference between `.apply()` and `.transform()` becomes very clear.

---

## 📊 Sample Dataset

```python
import pandas as pd

df = pd.DataFrame({
    'Dept': ['HR','HR','IT','IT','Finance','Finance'],
    'Salary': [3000, 3500, 4000, 4200, 5000, 5200]
})
print(df)
```

**Original DataFrame**

| |Dept|Salary|
|---|---|---|
|0|HR|3000|
|1|HR|3500|
|2|IT|4000|
|3|IT|4200|
|4|Finance|5000|
|5|Finance|5200|

---

## 🔹 `.apply()` with `groupby`

```python
# Average salary per department using apply
avg_apply = df.groupby('Dept')['Salary'].apply(lambda x: x.mean())
print(avg_apply)
```

**Output**

|Dept|Salary|
|---|---|
|Finance|5100.0|
|HR|3250.0|
|IT|4100.0|

👉 `.apply()` returns a **reduced result** (one row per group).

---

## 🔹 `.transform()` with `groupby`

```python
# Broadcast average salary back to all rows
df['Avg_Salary'] = df.groupby('Dept')['Salary'].transform(lambda x: x.mean())
print(df)
```

**Output**

| |Dept|Salary|Avg_Salary|
|---|---|---|---|
|0|HR|3000|3250.0|
|1|HR|3500|3250.0|
|2|IT|4000|4100.0|
|3|IT|4200|4100.0|
|4|Finance|5000|5100.0|
|5|Finance|5200|5100.0|

👉 `.transform()` returns a **result with the same shape as the original data**, broadcasting the group statistic back to each row.

---

## 📝 Key Difference in GroupBy

- **`.apply()`** → Reduces or changes the shape (one value per group).    
- **`.transform()`** → Must return the **same shape** (value per row).    


--- 

## 6️⃣ CUMULATIVE CALCULATIONS

### ➕ Cumulative Sum

```python
df['CUM_SALES'] = df.groupby('CITY')['SALES'].cumsum()
```

---

## 7️⃣ LEAD AND LAG CALCULATION

### ⏪ LAG Function
Retrieve **previous row's** value within a group:
```python
df['PREVIOUS_VISIT_DATE'] = df.groupby(['RESTAURANT', 'CUST_NAME'])['VISITS_DATE'].shift(1)
````

### ⏩ LEAD Function

Retrieve **next row's** value within a group:

```python
df['NEXT_VISIT_DATE'] = df.groupby(['RESTAURANT', 'CUST_NAME'])['VISITS_DATE'].shift(-1)
```

Used to compare customer behavior over time.

---

## 8️⃣ USE OF `FIRST.` AND `LAST.` (SAS-style logic in pandas)

### 📍 Flagging First and Last Record in Group

```python
df['start'] = df.groupby('STU_NAME').cumcount() == 0
df['end']   = df.groupby('STU_NAME').cumcount(ascending=False) == 0
```

* Convert to integer flags: `1` for True, `0` for False

---

## 9️⃣ SELECTING THE FIRST VALUE OF GROUPED VARIABLE

```python
df_first = df.groupby('STU_NAME').first().reset_index()
```

## 🔟 SELECTING THE LAST VALUE OF GROUPED VARIABLE

```python
df_last = df.groupby('STU_NAME').last().reset_index()
```

Used to simulate SQL/SAS-style first/last row behavior within groups.

---



---



## 1️⃣1️⃣ HOW TO GO FOR MONTH BACK CALCULATIONS

### 🕓 Pull Records from Past 6 Months
```python
from datetime import datetime, timedelta

end_date = datetime.now()
start_date = end_date - timedelta(days=6*30)  # Approximate 6 months

df_last_6_months = df[(df['date'] >= start_date) & (df['date'] <= end_date)]
````

### 🕓 Pull Records from Past 12 Months

```python
start_date = end_date - timedelta(days=12*30)  # Approximate 12 months

df_last_12_months = df[(df['date'] >= start_date) & (df['date'] <= end_date)]
```

---

## 1️⃣2️⃣ HOW TO SCHEDULE THE PYTHON PROGRAM

### 🛠 Install Scheduler

```bash
pip install schedule
```

### 🕒 Example: Schedule Every 5 Seconds

```python
import schedule
import time

def run_code():
    print("DV Analytics...")

schedule.every(5).seconds.do(run_code)

while True:
    schedule.run_pending()
    time.sleep(1)
```

### 🗓 Schedule Daily at Specific Time

```python
schedule.every().day.at("11:55").do(run_report)
```

---

## 1️⃣3️⃣ HOW TO SCHEDULE A MACRO PROGRAM TO RUN AND EMAIL REPORTS

### 📝 Save DataFrame to Excel

```python
df.to_excel('report.xlsx', index=False)
```

### 📧 Send Report via Email

```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

msg = MIMEMultipart()
msg['From'] = sender_email
msg['To'] = receiver_email
msg['Subject'] = 'Your Daily Report'
msg.attach(MIMEText(body))

with open('report.xlsx', 'rb') as f:
    part = MIMEApplication(f.read(), Name='report.xlsx')
    part['Content-Disposition'] = 'attachment; filename="report.xlsx"'
    msg.attach(part)

with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.starttls()
    server.login(smtp_user, smtp_password)
    server.send_message(msg)
```

> Replace placeholders (`smtp.example.com`, credentials, emails) with your real values.

---



